import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SharedModules } from './module-imports';
import { GeexConfig } from './geex.config';

@Global()
@Module({
  imports: [...SharedModules],
  controllers: [],
  providers: [JwtService],
  exports: [...SharedModules]
})
export class GeexModule { }
