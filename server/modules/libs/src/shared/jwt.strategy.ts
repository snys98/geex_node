import { RedisCache } from 'cache-manager-redis-yet';
import {
  ExtractJwt,
  Strategy,
  StrategyOptions,
} from 'passport-jwt';

import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Request, request } from "express";
import { AppConfig } from '../app.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  strategyOptions: StrategyOptions;
  constructor(@Inject(CACHE_MANAGER) private readonly cache: RedisCache,
    @Inject(AppConfig) private readonly appConfig: AppConfig,
  ) {
    const strategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: appConfig.jwt?.verifyOptions?.ignoreExpiration,
      secretOrKey: appConfig.jwt?.secret,
      jsonWebTokenOptions: appConfig.jwt?.verifyOptions,
      audience: appConfig.jwt?.signOptions?.audience,
      issuer: appConfig.jwt?.signOptions?.issuer,
      algorithms: appConfig.jwt?.signOptions?.algorithm && [appConfig.jwt?.signOptions?.algorithm],
    } satisfies StrategyOptions;
    super(strategyOptions);
    this.strategyOptions = strategyOptions;
  }

  async validate(payload: any) {
    const token = await this.cache.get(`Auth:Session:${payload.sub}`);
    if (!token) {
      throw new UnauthorizedException("token_expired");
    }
    // you can add more validation logic here  
    return payload;
  }
}  
