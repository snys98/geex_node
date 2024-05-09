import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TokenDto {
  constructor(init?: Partial<TokenDto>,) {
    Object.assign(this, init);

  }
  @Field(type => ID)
  public id: string;
  @Field()
  public accessToken: string;
}
