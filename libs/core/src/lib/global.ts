import { List } from "linqts-camelcase";
import { ArgumentsHost } from "@nestjs/common";
import { IncomingMessage, ServerResponse } from "http";
import { Request } from "express-serve-static-core";
import { Response } from "express";
import { use } from "typescript-mix";
import { GqlExecutionContext } from "@nestjs/graphql";

declare module '@nestjs/common' {
  export interface ArgumentsHost {
    switchToGql?: () => GqlExecutionContext;
  }


  export interface GqlExecutionContext {
    getRequest(): Request;
    getResponse(): Response;
  }
}

export function isFunction(obj: any): obj is Function {
  return obj.call !== undefined;
}
