import { GeexConfig } from '../geex.config';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    PassportModule.registerAsync({
      inject: [GeexConfig],
      useFactory: (geexConfig: GeexConfig) => {
        return { defaultStrategy: 'local' };
      },
    }),
  ],
})
export class GeexPassportModule { }
