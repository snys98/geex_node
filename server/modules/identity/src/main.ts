import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { NestApplicationOptions } from '@nestjs/common';

async function bootstrap() {
  // todo: move env specific code to a separate build process
  const appOptions: NestApplicationOptions = { bufferLogs: true, cors: true };
  if (process.env.SSL_CERT_FILE && process.env.SSL_KEY_FILE) {
    const httpsOptions = {
      cert: fs.readFileSync(process.env.SSL_CERT_FILE),
      key: fs.readFileSync(process.env.SSL_KEY_FILE),
    };
    appOptions.httpsOptions = httpsOptions;
  }
  const app = await NestFactory.create(AppModule, appOptions);
  // todo: move logger to standard global middleware implementation
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  await app.listen(3001);
}
bootstrap();
