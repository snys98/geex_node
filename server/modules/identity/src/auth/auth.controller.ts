import { Controller, Post, Body, HttpException, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from '../shared/inputs/login.input';
import { RegisterInput } from '../shared/inputs/register.input';
import { modelToDto } from 'xorgx-libs';
import { UserDto } from '../shared/dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() input: LoginInput) {
    const user = await this.authService.validateUser(input.username, input.passwordHash);
    if (user) {
      return await this.authService.signIn(user);
    };
    throw new HttpException('Invalid credentials', 400);
  }

  @Post('register')
  async register(@Body() input: RegisterInput) {
    const user = await this.authService.register(input.username, input.password);
    return modelToDto(user.toObject(), UserDto, "id", "username", "locked");
  }
}  
