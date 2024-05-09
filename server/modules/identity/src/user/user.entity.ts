import { DocumentType, modelOptions, prop } from "@typegoose/typegoose";
import { md5 } from "hash-wasm";

export declare type UserDocument = DocumentType<User>;
@modelOptions({
  schemaOptions: {
    collection: "user",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }, options: {}
})
export class User {
  async setPassword(password: string) {
    this.passwordHash = await md5(password);
  }
  id: string;
  @prop({ type: String, required: true, unique: true, minlength: 4, maxlength: 20, index: true })
  public username: string;
  @prop({ type: String, required: true, select: false })
  public passwordHash?: string;
  @prop({ type: Boolean, required: true, default: false })
  public locked: boolean = false;

  constructor(
    username: string,
  ) {
    this.username = username
  }

  lock(): void {
    this.locked = true;
  }
  unlock(): void {
    this.locked = false;
  }
}
