import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { GeexConfig } from '../geex.config';
export function createCacheModule(geexConfig: GeexConfig) {

  return CacheModule.register({
    isGlobal: true,
    store() {
      return redisStore(geexConfig.redis);
    },
  });
}
