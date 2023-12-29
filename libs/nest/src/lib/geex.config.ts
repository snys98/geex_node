import type { RedisClientOptions } from 'redis';

import type { JwtModuleOptions } from '@nestjs/jwt';
import { Injectable, Scope } from '@nestjs/common';
const appName = process.env.APP_NAME || "geex";
@Injectable({
  scope: Scope.DEFAULT
})
export class GeexConfig {
  appName: string = appName;
  mongoose: MongooseModuleConfig = {
    mongoUri: process.env.MONGO_URI || `mongodb://mongo.dev.geex.io:27017/geex?replicaSet=rs0&readPreference=primaryPreferred&appName=${appName}`,
  };
  logger: LoggerModuleConfig = {
    esNode: process.env.ES_NODE || 'http://elasticsearch.dev.geex.io:9200',
    apmUrl: process.env.APM_URL || 'http://apm-server.dev.geex.io:8200',
    logStashUrl: process.env.LOGSTASH_URL || 'http://logstash.dev.geex.io:9600',
    esUsername: process.env.ES_USERNAME || 'elastic',
    esPassword: process.env.ES_PASSWORD || 'geex123456',
  };
  redis: RedisClientOptions = {
    url: process.env.REDIS_URL || "redis://redis.dev.geex.io:6379/0",
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
