import { UserService } from './user.service';
import { Query, Resolver } from '@nestjs/graphql';
import { modelToDto } from 'xorgx-libs';
import { UserDto } from '../shared/dtos/user.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {

  }

  @Query(returns => [UserDto])
  async users() {
    const users = await this.userService.getUsers();
    return users.map(user => modelToDto(user.toObject(), UserDto, "id", "username", "locked"));
  }
}  
