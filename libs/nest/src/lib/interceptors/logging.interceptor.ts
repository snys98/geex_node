import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Logger } from '../logging';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private _logger: Logger) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const now = Date.now();
    const logResponse = process.env.LogResponse;
    if (request) {
      const { headers, body } = request;

      this._logger.info({
        headers,
        body: this.formatMessage(body),
      });
    }

    return next
      .handle()
      .pipe(
        tap((data) =>
          logResponse === 'true'
            ? this._logger.info({
              body: this.formatMessage(data),
              time: `${Date.now() - now}ms`,
            })
            : null,
        ),
      );
  }

  private formatMessage(message: any): string {
    if (typeof message === 'string') {
      return message;
    } else if (typeof message === 'object') {
      return JSON.stringify(message);
    } else if (Buffer.isBuffer(message)) {
      return `[binary(${(message.length / 1024).toPrecision(2)}kb)]`;
    }
    return '';
  }
}
