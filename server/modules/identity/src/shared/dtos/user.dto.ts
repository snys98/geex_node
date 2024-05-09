import { ObjectType, Field, ID } from "@nestjs/graphql";
import { type User } from "../../user/user.entity";
import { type DtoOf } from "xorgx-libs";

@ObjectType()
export class UserDto implements DtoOf<User> {
  @Field(type => ID)
  id: string;
  @Field()
  public username: string;
  @Field()
  public locked: boolean;
}
