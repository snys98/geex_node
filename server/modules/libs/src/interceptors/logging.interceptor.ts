import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AppConfig } from '../app.config';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly _logger = new Logger(LoggingInterceptor.name);
  constructor(@Inject(AppConfig) private appConfig: AppConfig) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const now = Date.now();
    const logResponse = this.appConfig?.logger?.logResponse;

    if (request) {
      const { headers, body } = request;
      this._logger.log({
        message: "Request Started.",
        headers,
        body: this.formatMessage(body),
      });
    }

    return next
      .handle()
      .pipe(
        tap((data) => {
          if (logResponse) {
            this._logger.log({
              message: "Response Started.",
              data: this.formatMessage(data),
              duration: `${Date.now() - now}ms`,
            });
          }
        }),
      );
  }

  private formatMessage(message: any): string {
    if (typeof message === 'string') {
      return message;
    } else if (typeof message === 'object') {
      return JSON.stringify(message);
    } else if (Buffer.isBuffer(message)) {
      return `binary(${(message.length / 1024).toPrecision(2)}kb)`;
    }
    return '';
  }
}
