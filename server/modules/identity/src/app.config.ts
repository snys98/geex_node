import { AppConfig } from 'xorgx-libs';

import { permissions } from './app.permissions';

export const appConfig = {
  appName: process.env.APP_NAME || "identity",
  logger: {
    logResponse: process.env.LOG_RESPONSE === "true" || false,
  },
  typegoose: {
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/xorgx",
  },
  redis: {
    url: process.env.REDIS_URL || "redis://localhost:6379/0",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret"
  },
  permissions: permissions
} satisfies AppConfig;
