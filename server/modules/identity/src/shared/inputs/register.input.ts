import { Field, InputType } from '@nestjs/graphql';
import { IsStrongPassword, Length, ValidateIf,   } from "class-validator";
import { SelfValidate } from 'xorgx-libs';
@InputType()
export class RegisterInput {
  constructor(init?: Partial<RegisterInput>,) {
    Object.assign(this, init);

  }
  @Field()
  @Length(4, 20, { message: "Username must be between 4 and 20 characters." })
  username: string;
  @Field()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minSymbols: 0,
    minNumbers:0
  })
  password: string;
  @Field()
  @SelfValidate((o: RegisterInput) => o.password === o.passwordConfirmation, {
    message: "Password confirmation does not match password"
  })
  passwordConfirmation: string;
}
