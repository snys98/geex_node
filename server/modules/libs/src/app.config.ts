import type { RedisClientOptions } from 'redis';

import type { JwtModuleOptions } from '@nestjs/jwt';
import { TypegooseConnectionOptions } from '@geexbox/nestjs-typegoose';
import { IRules } from 'graphql-shield';
import e from 'express';
import { ServiceEndpointDefinition } from '@apollo/gateway';

export const DefaultAppConfig = {
  appName: process.env.APP_NAME || "xorgx",
  typegoose: {
    mongoUri: process.env.MONGO_URI || "mongodb://mongo.dev.xorgx.tech:27017/xorgx",
  } satisfies TypegooseModuleConfig,
  logger: {
    esNode: process.env.ES_NODE || 'http://elasticsearch.dev.xorgx.tech:9200',
    apmUrl: process.env.APM_URL || 'http://apm-server.dev.xorgx.tech:8200',
    logStashUrl: process.env.LOGSTASH_URL || 'http://logstash.dev.xorgx.tech:9600',
    esUsername: process.env.ES_USERNAME || 'elastic',
    esPassword: process.env.ES_PASSWORD || 'challenge123456',
  },
  redis: {
    url: process.env.REDIS_URL || "redis://redis.dev.xorgx.tech:6379/0",
  } satisfies RedisClientOptions,
  jwt: {
    secret: process.env.JWT_SECRET_KEY || "secretKey",
  } satisfies JwtModuleOptions,
  gql: {
  },
} satisfies AppConfig;
export declare type LoggerModuleConfig = {
  logResponse?: boolean;
  logStashUrl?: string;
  apmUrl?: string;
  esNode?: string;
  esUsername?: string;
  esPassword?: string;
};

export declare type JwtModuleConfig = JwtModuleOptions;
export declare type TypegooseModuleConfig = {
  mongoUri: string;
  autoMigration?: boolean;
} & TypegooseConnectionOptions;
export declare type AppConfig = {
  appName: string,
  typegoose?: TypegooseModuleConfig,
  logger?: LoggerModuleConfig,
  redis?: RedisClientOptions,
  jwt?: JwtModuleConfig,
  permissions?: IRules,
  gql?: {
    subgraphs?: ServiceEndpointDefinition[],
  }
};

export const AppConfig = typeof DefaultAppConfig;
