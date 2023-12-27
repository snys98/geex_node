// FILEPATH: /w:/workspace/geexbox/geex-node/server/modules/src/user/user.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserClass } from './user.model';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { getModelToken } from '@geexbox/nestjs-typegoose';
import { mockData } from '../../test/mocks/data.mock';
import { JwtStrategy } from '../auth';
import { UserModule } from './user.module';
import { GeexConfig } from '@geex/nest';

describe('UserController', () => {
  let app: INestApplication;
  let userModel: ReturnModelType<typeof UserClass>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      // controllers: [UserController],
      providers: [
        GeexConfig
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    userModel = moduleRef.get<ReturnModelType<typeof UserClass>>(getModelToken(UserClass.name));
  });

  it('/GET users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', 'Bearer token')
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchObject(Object.values(mockData.users));
      });
  });

  afterEach(async () => {
    await app?.close();
  });
})
