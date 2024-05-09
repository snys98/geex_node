import { User } from './user.entity';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { InjectModel } from '@geexbox/nestjs-typegoose';

export class UserService {
  constructor(@InjectModel(User) private userModel: ReturnModelType<typeof User>
  ) {

  }

  async getUsers(): Promise<DocumentType<User>[]> {
    const users = await this.userModel.find()
      // .populate('password')
      .exec();
    return users;
  }
}
