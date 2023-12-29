import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypegooseModule } from '@geexbox/nestjs-typegoose';
import { UserClass } from './user.model';
import { AuthModule } from '..';

const MongooseModules = [TypegooseModule.forFeature([UserClass])];
@Module({
  imports: [...MongooseModules, AuthModule],
  providers: [],
  controllers: [UserController],
  exports: [...MongooseModules]
})
export class UserModule { }
