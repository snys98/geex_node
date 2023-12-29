import { JwtModule } from '@nestjs/jwt';
import { GeexConfig } from '../geex.config';
import { DynamicModule, Global, Module } from '@nestjs/common';

@Global()
@Module({})
export class GeexConfigModule { 
  static forRoot(config: GeexConfig): DynamicModule {
    return {
      module: GeexConfigModule,
      providers: [
        {
          provide: GeexConfig,
          useValue: config,
        },
      ],
      exports: [GeexConfig]
    };
  }
}
