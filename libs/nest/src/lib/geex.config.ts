import type { RedisClientOptions } from 'redis';

import type { JwtModuleOptions } from '@nestjs/jwt';
const appName = process.env.APP_NAME || "api";
export class GeexConfig {
  appName: string = appName;
  mongoose: MongooseModuleConfig = {
    mongoUri: process.env.MONGO_URI || `mongodb://mongo.geex.io:27017/challenge?replicaSet=rs0&readPreference=primaryPreferred&appName=${appName}`,
  };
  logger: LoggerModuleConfig = {
    esNode: process.env.ES_NODE || 'http://elasticsearch.geex.io:9200',
    apmUrl: process.env.APM_URL || 'http://apm-server.geex.io:8200',
    logStashUrl: process.env.LOGSTASH_URL || 'http://logstash.geex.io:9600',
    esUsername: process.env.ES_USERNAME || 'elastic',
    esPassword: process.env.ES_PASSWORD || 'geex123456',
  };
  redis: RedisClientOptions = {
    url: process.env.REDIS_URL || "redis://redis.geex.io:6379/0",
  };
  jwt?: JwtModuleConfig = {
    secret: process.env.JWT_SECRET_KEY || "secretKey",
  };
};
export declare type LoggerModuleConfig = {
  logStashUrl?: string;
  apmUrl?: string;
  esNode?: string;
  esUsername?: string;
  esPassword?: string;
};

export declare type JwtModuleConfig = JwtModuleOptions;
export declare type MongooseModuleConfig = {
  mongoUri: string;
};
// export declare type GeexConfig = {
//   appName: string,
//   mongoose: MongooseModuleConfig,
//   logger: LoggerModuleConfig,
//   redis: RedisClientOptions,
//   jwt?: JwtModuleConfig,
// };
