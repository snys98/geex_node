import { MongooseModule } from '@nestjs/mongoose';
import { GeexConfig } from '../geex.config';

export function createMongooseModule(config: GeexConfig) {
  console.log(config.mongoose.mongoUri);

  return MongooseModule.forRoot(config.mongoose.mongoUri, {
    replicaSet: "rs0",
    autoCreate: true,
    readPreference: "primaryPreferred",
    appName: config.appName,
  });
}
