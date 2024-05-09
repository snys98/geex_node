import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypegooseModule } from '@geexbox/nestjs-typegoose';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

const MongooseModules = [TypegooseModule.forFeature([User])];
@Module({
  imports: [...MongooseModules],
  providers: [UserService, UserResolver],
  controllers: [UserController],
  exports: [...MongooseModules]
})
export class UserModule { }
