import "./setup";
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import migrate from "ts-migrate-mongoose";
import { AppModule } from '../../src/app.module';
import { AppConfig } from 'xorgx-libs';
import { mockData } from "../mocks/mock-data";
import { App } from "supertest/types";
import { } from '@apollo/subgraph';
import { loginMutation, usersQuery } from "./queries";
import { LoginInput } from "../../src/shared/inputs/login.input";

describe('user module', () => {
  const testUser = mockData.users.find(u => u.username === 'test')!;
  let app: INestApplication;
  let server: App;
  let migrator: migrate;
  beforeAll(async () => {

  });
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
    migrator = await migrate.connect({
      uri: app.get<AppConfig>(AppConfig).typegoose!.mongoUri, migrationsPath: "./test/mocks", autosync: true, connectOptions: {
        replicaSet: "rs0",
        readPreference: "primaryPreferred",
        appName: "user-migration",
        connectTimeoutMS: 5000,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 5000,
        waitQueueTimeoutMS: 5000,
        maxConnecting: 1
      }
    });
    await migrator.connection.dropDatabase();
    await migrator.run("up");
  });

  afterEach(async () => {
    await app.close();
    await migrator.connection.close(true);
  });

  describe("controller", () => {
    it('[GET /users]  should throw error when no token provided', async () => {
      return await request(server)
        .get('/users')
        .expect(401)
        .expect((res) => {
          expect(res.body.message).toBe('Unauthorized');
        });
    });

    it('[GET /users] should return users when token provided', async () => {
      // Login to get the token
      const loginResponse = await request(server)
        .post('/auth/login')
        .send({ username: testUser.username, passwordHash: testUser.passwordHash })
        .expect(201);

      const token = loginResponse.body.accessToken;

      // Use the token in the users query
      return await request(server)
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect((res) => {
          const users = res.body;
          expect(users).toBeDefined();
          expect(Array.isArray(users)).toBe(true);
          expect(users.length).toBeGreaterThan(0);
          users.forEach((user: any) => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('username');
            expect(user).toHaveProperty('locked');
          });
        });
    })
  });

  describe("resolver", () => {
    it('[query users] should throw error when no token provided', async () => {
      return await request(server)
        .post('/graphql')
        .send({
          query: usersQuery
        })
        .expect((res) => {
          const error = res.body.errors[0];
          expect(error).toBeDefined();
          expect(error.message).toBe('Unauthorized');
        });
    });

    it('[query users] should return users when token provided', async () => {

      const input: LoginInput = {
        username: testUser.username,
        passwordHash: testUser.passwordHash,
      };
      // Login to get the token
      const loginResponse = await request(server)
        .post('/graphql')
        .send({
          query: loginMutation,
          variables: { input },
        })
        .expect(200);

      const token = loginResponse.body.data.login.accessToken;

      // Use the token in the users query
      return await request(server)
        .post('/graphql')
        .set('Authorization', `Bearer ${token}`)
        .send({
          query: usersQuery
        })
        .expect((res) => {
          const users = res.body.data.users;
          expect(users).toBeDefined();
          expect(Array.isArray(users)).toBe(true);
          expect(users.length).toBeGreaterThan(0);
          users.forEach((user: any) => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('username');
            expect(user).toHaveProperty('locked');
          });
        });
    });
  });
});
