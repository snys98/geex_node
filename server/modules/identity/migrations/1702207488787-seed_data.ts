// Import your models here
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../src/user/user.entity'
import { seedData } from './data';

// const userModel = getModelForClass(User)
export async function up(): Promise<void> {
  // Write migration here
  const userModel = getModelForClass(User)
  await userModel.create(seedData.users)
}

export async function down(): Promise<void> {
  // Write migration here
  const userModel = getModelForClass(User)
  await userModel.deleteMany({
    id: { $in: ["000000000000000000000001", "000000000000000000000002"] }
  }).exec();
}
