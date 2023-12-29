import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }  
