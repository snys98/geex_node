import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { GqlContext } from '../common/types';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter, GqlExceptionFilter {
  private readonly _logger = new Logger(HttpExceptionFilter.name);
  constructor() { }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    if (request) {
      return this.handleException(exception, ctx, request, response);
    } else {
      // GRAPHQL Exception
      const ctx = GqlArgumentsHost.create(host);
      const req = ctx.getContext<GqlContext>().req;
      const res = req.res
      return this.handleException(exception, ctx, req, res);
    }
  }

  private handleException(exception: HttpException, ctx, request: Request, response: Response) {
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      error: status !== HttpStatus.INTERNAL_SERVER_ERROR
        ? exception.message || null
        : 'Internal server error',
      message: typeof exception.getResponse() === 'object'
        ? (exception.getResponse() as any).message
        : exception.getResponse(),
    };

    if (status >= 500) {
      this._logger.error(
        `${request.method} ${request.url}`,
        JSON.stringify(errorResponse)
      );
    }
    else if (status >= 400) {
      this._logger.warn(
        `${request.method} ${request.url}`,
        JSON.stringify(errorResponse)
      );
    }
    else {
      this._logger.log(
        `${request.method} ${request.url}`,
        JSON.stringify(errorResponse)
      );
    }

    return response.status(status).json(errorResponse);
  }
}
