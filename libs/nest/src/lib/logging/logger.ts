import { Injectable, LoggerService } from '@nestjs/common';
import winston = require('winston');
import { use } from "typescript-mix";


// tslint:disable-next-line: no-empty-interface
export interface Logger extends winston.Logger { }
@Injectable()
export class Logger implements winston.Logger {
  /**
   *
   */
  // tslint:disable-next-line: no-empty
  constructor() {

  }
}
use(winston, Logger);
