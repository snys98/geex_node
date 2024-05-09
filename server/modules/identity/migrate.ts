import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const env = process.env.NODE_ENV;
console.log(`Running migration for env: ${env ?? 'local'}`);

console.log("Migrating on with connection: ", process.env.MONGO_URI);

export default {
  uri: process.env.MONGO_URI,
  // collection: "migrations",
  // migrationsPath: "./migrations",
  // templatePath: "./migrations/template.ts",
  // autosync: true,
};
const connectionConfig = {
  replicaSet: "rs0",
  readPreference: "primaryPreferred",
  appName: "user-migration",
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 5000,
  waitQueueTimeoutMS: 5000,
} as any;
// bug: see https://github.com/balmasi/migrate-mongoose/issues/45#issuecomment-532322882
mongoose.connect(process.env.MONGO_URI!, connectionConfig);
