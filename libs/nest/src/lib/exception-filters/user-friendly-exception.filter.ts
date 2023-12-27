import { Catch, HttpException } from "@nestjs/common";
import { GqlExceptionFilter, GqlArgumentsHost } from "@nestjs/graphql";
import { ArgumentsHost } from "@nestjs/common/interfaces";
import { Logger } from "../logging";

@Catch()
export class UserFriendlyExceptionFilter implements GqlExceptionFilter {
  /**
   *
   */
  constructor(private readonly loggingService: Logger) {

  }
  catch(exception: HttpException, host: ArgumentsHost) {
    this.loggingService.warn(exception.name, exception);
    return exception;
  }
}
