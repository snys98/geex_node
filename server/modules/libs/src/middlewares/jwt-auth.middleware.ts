import { Injectable, ExecutionContext, NestMiddleware, NestInterceptor, CallHandler } from "@nestjs/common";
import { GqlArgumentsHost, GqlExecutionContext } from "@nestjs/graphql";
import { NextFunction, Request, request } from "express";
import { JwtStrategy } from "../shared/jwt.strategy";
import { Observable } from "rxjs";
import { GqlContext } from "../common/types";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
  /**
   *
   */
  constructor(private jwtStrategy: JwtStrategy, private jwtService: JwtService) {

  }
  async use(req: Request, res: Response, next: NextFunction) {
    const token = this.jwtStrategy.strategyOptions.jwtFromRequest(req);
    if (token) {
      const payload = await this.jwtService.verifyAsync(token);
      req.user = payload;
    }
    // if (req) {
    //   debugger;
    //   this.extractUser(req);
    // }
    // else {
    //   // GRAPHQL Exception
    //   const ctx = GqlArgumentsHost.create(context);
    //   const gqlContext = ctx.getContext<GqlContext>();
    //   const req = gqlContext.req;
    //   debugger;
    //   this.extractUser(req);
    // }
    next();
  }
}
