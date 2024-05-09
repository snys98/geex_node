import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AppConfig } from '../app.config';

export function createCacheModule(appConfig: AppConfig) {

  return CacheModule.registerAsync({
    isGlobal: true,
    useFactory: async () => ({
      store() {
        return redisStore(appConfig.redis);
      },
    }),
  });
}
