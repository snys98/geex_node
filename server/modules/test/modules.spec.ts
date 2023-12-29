// // FILEPATH: /w:/workspace/geexbox/geex-node/server/modules/src/user/user.controller.spec.ts
// import { Test, TestingModule } from '@nestjs/testing';
// import request from 'supertest';
// import { INestApplication } from '@nestjs/common';
// import { ReturnModelType } from '@typegoose/typegoose';
// import { getModelToken } from '@geexbox/nestjs-typegoose';
// import { GeexConfig, GeexModule } from '@geex/nest';
// import { UserClass, UserModule } from '../src';
// import { mockData } from './mocks/data.mock';

// describe('modules', () => {
//   let app: INestApplication;
//   let userModel: ReturnModelType<typeof UserClass>;

//   beforeEach(async () => {
//     const moduleRef: TestingModule = await Test.createTestingModule({
//       imports: [GeexModule.forRoot(new GeexConfig()), UserModule],
//       // controllers: [UserController],
//       providers: [],
//       exports: []
//     }).compile();

//     app = moduleRef.createNestApplication({
//       bufferLogs: true,
//     });
//     await app.init();

//     userModel = moduleRef.get<ReturnModelType<typeof UserClass>>(getModelToken(UserClass.name));
//   });

//   // it('/GET users', () => {
//   //   return request(app.getHttpServer())
//   //     .get('/users')
//   //     .set('Authorization', 'Bearer token')
//   //     .expect(200)
//   //     .then((response) => {
//   //       expect(response.body).toMatchObject(Object.values(mockData.users));
//   //     });
//   // });

//   afterEach(async () => {
//     await app?.close();
//   });
// })
