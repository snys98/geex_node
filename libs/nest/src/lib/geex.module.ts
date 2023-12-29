import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SharedModules } from './module-imports';
import { GeexConfig } from './geex.config';
import { GeexConfigModule } from './module-imports/config.module';
@Global()
@Module({
  controllers: [],
})
export class GeexModule {
  static forRoot(config: GeexConfig): DynamicModule {
    return {
      module: GeexModule,
      imports: [GeexConfigModule.forRoot(config), ...SharedModules],
      exports: [...SharedModules]
    };
  }
}
