import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { GeexConfig } from '../geex.config';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    CacheModule.registerAsync({
      inject: [GeexConfig],
      useFactory: (geexConfig: GeexConfig) => {
        return {
          isGlobal: true,
          store() {
            return redisStore(geexConfig.redis);
          },
        };
      },
    }),
  ],
})
export class GeexCacheModule { }
