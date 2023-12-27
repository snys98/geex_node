import { TypegooseModule } from '@geexbox/nestjs-typegoose';
import { GeexConfig } from '../geex.config';
import { Module } from '@nestjs/common';

export function createMongooseModule(config: GeexConfig) {
  console.log(config.mongoose.mongoUri);

  return TypegooseModule.forRoot(config.mongoose.mongoUri);
}

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      inject: [GeexConfig],
      useFactory: (geexConfig: GeexConfig) => {
        return { uri: geexConfig.mongoose.mongoUri };
      },
    }),
  ],
})
export class GeexTypegooseModule { }
