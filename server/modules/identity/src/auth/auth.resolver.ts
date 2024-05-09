import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { HttpException } from '@nestjs/common';
import { TokenDto } from '../shared/dtos/token.dto';
import { UserDto } from '../shared/dtos/user.dto';
import { LoginInput } from '../shared/inputs/login.input';
import { RegisterInput } from '../shared/inputs/register.input';
import { modelToDto } from "xorgx-libs";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(returns => TokenDto)
  async login(@Args("input") input: LoginInput) {
    const user = await this.authService.validateUser(input.username, input.passwordHash);
    if (user) {
      return await this.authService.signIn(user);
    };
    throw new HttpException('Invalid credentials', 400);
  }

  @Mutation(returns => UserDto)
  async register(@Args("input") input: RegisterInput) {
    const user = await this.authService.register(input.username, input.password);
    return modelToDto(user.toObject(), UserDto, "id", "username", "locked");
  }
}  
