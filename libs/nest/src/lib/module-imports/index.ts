import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TerminusModule } from '@nestjs/terminus';
import { RedisHealthModule } from '@songkeys/nestjs-redis-health';

import { GeexConfig } from '../geex.config';
import { GeexLoggerModule } from './logger.module';
import { GeexCacheModule } from './redis.module';
import { GeexTypegooseModule } from './typegoose.module';
import { GeexPassportModule } from './passport.module';
import { GeexJwtModule } from './jwt.module';

export const RootModules = [
  HttpModule,
  TerminusModule,
  GeexLoggerModule,
  GeexCacheModule,
  RedisHealthModule,
  GeexTypegooseModule,
];
export const SharedModules = [
  GeexPassportModule,
  GeexJwtModule,
];
