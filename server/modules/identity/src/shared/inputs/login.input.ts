import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";
@InputType()
export class LoginInput {
  constructor(init?: Partial<LoginInput>,) {
    Object.assign(this, init);

  }
  @Field()
  @IsNotEmpty()
  username: string;
  @Field()
  @IsNotEmpty()
  passwordHash: string;
}
