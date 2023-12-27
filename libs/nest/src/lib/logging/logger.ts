import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';


// tslint:disable-next-line: no-empty-interface
@Injectable({ scope: Scope.TRANSIENT })
export class Logger extends ConsoleLogger {
  override verbose(message: string, data?: any): void {
    if (typeof message === "string") {
      super.verbose(message, this.context, { data });
    } else {
      message = data.message;
      super.verbose(message ?? "no message", this.context, { data });
    }
  }
  override debug(message: string, data?: any): void {
    if (typeof message === "string") {
      super.debug(message, this.context, { data });
    } else {
      message = data.message;
      super.debug(message ?? "no message", this.context, { data });
    }
  }
  info(message: string, data?: any): void { 
    return this.log(message, data);
  }
  
  /**
   * 
   * @deprecated use logger.info instead
   * @memberof Logger
   */
  override log(message: string, data?: any): void {
    if (typeof message === "string") {
      super.log(message, this.context, { data });
    } else {
      message = data.message;
      super.log(message ?? "no message", this.context, { data });
    }
  }
  override warn(message: string, data?: any): void {
    if (typeof message === "string") {
      super.warn(message, this.context, { data });
    } else {
      message = data.message;
      super.warn(message ?? "no message", this.context, { data });
    }
  }
  override error(message: string, data?: any): void {
    if (typeof message === "string") {
      super.error(message, this.context, { data });
    } else {
      message = data.message;
      super.error(message ?? "no message", this.context, { data });
    }
  }
}
