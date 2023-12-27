import { Module } from '@nestjs/common';
import { UserFriendlyExceptionFilter } from './user-friendly-exception.filter';
import { ModuleRef } from '@nestjs/core';
import { Logger } from '../logging';

@Module({
    providers: [UserFriendlyExceptionFilter, {
        provide: Logger,
        useFactory: (moduleRef: ModuleRef) => {
            return moduleRef.get(Logger);
        },
        inject: [ModuleRef],
    }]
})
export class ExceptionFilterModule { }
