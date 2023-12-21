import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createSharedModules } from './module-imports';
import { GeexConfig } from './geex.config';

const SharedModules = createSharedModules(GeexConfig);
@Global()
@Module({
    imports: SharedModules,
    controllers: [],
    providers: [JwtService],
    exports: SharedModules
})
export class GeexModule { }
