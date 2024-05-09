import { Logger, UnauthorizedException } from '@nestjs/common';
import { IRules, rule, shield } from 'graphql-shield';
import { Request } from "express"

// ...

// Permissions
const isAuthenticated = rule()(async (parent, args, ctx: { req: Request }, info) => {
  if (ctx?.req?.user) {
    return true;
  }
  return new UnauthorizedException();
});

export const permissions: IRules = {
  Query: {
    users: isAuthenticated
  },
  Mutation: {
    login: rule()((parent, args, ctx: { req: Request }, info) => {
      return true;
    }),
  }
};
