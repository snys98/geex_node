import { Logger, Module } from '@nestjs/common';
import { HostingModule } from 'xorgx-libs';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { appConfig } from './app.config';

@Module({
  imports: [
    HostingModule.forRoot({
      imports: [AuthModule, UserModule],
    }, appConfig)
  ],
})
export class AppModule { }
