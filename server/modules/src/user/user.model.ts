import { DocumentType, modelOptions, prop } from "@typegoose/typegoose";
import validator from "validator";
import { Logger } from "@geex/nest"
import { Base } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";

const defaultOptions = {
  minUppercase: 1,
  minSymbols: 1,
  minNumbers: 1,
  minLength: 6,
  returnScore: false,
} as validator.StrongPasswordOptions & { returnScore: false; };

const passwordValidator = (value: string) => validator.isStrongPassword(value, defaultOptions);

@modelOptions({
  schemaOptions: {
    collection: "user", toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }, options: {}
})
export class UserClass implements Base {
  private readonly logger = new Logger(UserClass.name);
  _id!: Types.ObjectId;
  id!: string;
  @prop({ required: true, unique: true, minlength: 4, maxlength: 20, index: true })
  public username: string;
  @prop({ required: true, maxlength: 20, validators: [passwordValidator] })
  public password: string;
  @prop({ required: true, default: false })
  public locked: boolean = false;

  constructor(
    username: string,
    password: string,
  ) {
    this.username = username
    this.password = password
  }

  async lock(this: DocumentType<Hint<UserClass>>): Promise<void> {
    this.logger?.info(`Locking user: ${this.username}`);
    this.locked = true;
    await this.save();
    this.logger?.info(`User locked: ${this.username}`);
  }
}
