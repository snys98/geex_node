import { Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser, Logger } from '@geex/nest';
import { InjectModel } from '@geexbox/nestjs-typegoose';
import { UserClass } from './user.model';
import { ReturnModelType, getModelForClass } from '@typegoose/typegoose';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(@InjectModel(UserClass) private userModel: ReturnModelType<typeof UserClass>
  ) {

  }

  @UseGuards(AuthGuard('local'))
  @Get()
  async getUsers(@CurrentUser() currentUser?: any) {
    this.logger.info(this.getUsers.name, currentUser);
    const users = await this.userModel.find().exec();
    return users.map(user => user.toObject());
  }
}  
