// Import your models here
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../src/user/user.entity'
import { mockData } from './mock-data';

// const userModel = getModelForClass(User)
export async function up(): Promise<void> {
  // Write migration here
  const userModel = getModelForClass(User)
  const docs = await userModel.create(mockData.users)
  await userModel.bulkSave(docs);
}

export async function down(): Promise<void> {
  // Write migration here
  throw new Error("not supported.")
}
