import { TypegooseModule } from '@geexbox/nestjs-typegoose';
import { AppConfig } from '../app.config';
import { Logger } from '@nestjs/common';


export function createTypegooseModule(config: AppConfig) {
  const typegooseConfig = config.typegoose;
  Logger.log({ message: `Connecting mongodb with url: ${typegooseConfig.mongoUri}` }, TypegooseModule);

  return TypegooseModule.forRoot(typegooseConfig.mongoUri, {
    replicaSet: "rs0",
    autoCreate: true,
    serverSelectionTimeoutMS: 1000,
    directConnection: true,
    readPreference: "primaryPreferred",
    appName: config.appName,
  });
}
