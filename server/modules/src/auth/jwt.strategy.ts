import { Cache } from 'cache-manager';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';

import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "local") {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey', // replace with your own secret key  ,
    });
  }

  async validate(payload: any) {
    const token = await this.cache.get(`Auth:Session:${payload.sub}`);
    if (!token) {
      throw new UnauthorizedException();
    }
    // you can add more validation logic here  
    return payload;
  }
}  
