import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {

  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async getUsers(): Promise<User[]> {
    const users = await this.userService.getUsers();
    return users.map(user => user.toObject());
  }
}  
