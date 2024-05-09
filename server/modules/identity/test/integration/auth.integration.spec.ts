import "./setup";
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import migrate from "ts-migrate-mongoose";
import { LoginInput } from '../../src/shared/inputs/login.input';
import { mockData } from '../mocks/mock-data';
import { MaxFailedLoginAttempts } from '../../src/auth/auth.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { AppConfig } from "xorgx-libs";
import { App } from "supertest/types";
import { loginMutation, registerMutation } from "./queries";

describe('auth module', () => {
  const testUser = mockData.users.find(u => u.username === 'test')!;
  let app: INestApplication;
  let server: App;
  let migrator: migrate;
  let redis: Cache;
  beforeAll(async () => {

  });
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
    redis = app.get(CACHE_MANAGER);
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
    await redis.del(`Auth:FailedAttempts:${testUser._id}`);
    await migrator.run("up");
  });

  afterEach(async () => {
    await app.close();
    await migrator.connection.close(true);
  })

  describe("controller", () => {

    it('[POST /auth/login] should return a token when valid credentials are provided', async () => {
      // Arrange
      const input = {
        username: testUser.username,
        passwordHash: testUser.passwordHash,
      } satisfies LoginInput;

      // Act
      const response = await request(server)
        .post('/auth/login')
        .send(input);

      // Assert
      expect(response.status).toBe(201);
      expect(response.body.accessToken).toBeDefined();
    });

    it('[POST /auth/login] should throw error when invalid credentials are provided', async () => {
      // Arrange
      const input: LoginInput = {
        username: testUser.username,
        passwordHash: 'wrongpassword',
      };

      // Act
      const response = await request(server)
        .post('/auth/login')
        .send(input);

      // Assert
      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid credentials');
    });

    it('[POST /auth/login] should throw error when maximum failed login attempts reached', async () => {
      const input: LoginInput = {
        username: testUser.username,
        passwordHash: testUser.passwordHash,
      };

      // Arrange
      for (let i = 0; i < MaxFailedLoginAttempts; i++) {
        let response = await request(server)
          .post('/auth/login')
          .send({
            username: `${input.username}`,
            passwordHash: "wrongpasswordhash"
          });

        expect(response.status).toBe(401);
        expect(response.body.error).toBe('Invalid credentials');
      }
      // Act
      const response = await request(server)
        .post('/auth/login')
        .send(input);

      // Assert
      expect(response.status).toBe(401);
      expect(response.body.error).toBe('User account is locked.');
    });

    it('[POST /auth/login] should unlock user after lock session expired', async () => {
      const input: LoginInput = {
        username: testUser.username,
        passwordHash: testUser.passwordHash,
      };

      // Arrange
      {
        for (let i = 0; i < MaxFailedLoginAttempts; i++) {
          let response = await request(server)
            .post('/auth/login')
            .send({
              username: `${input.username}`,
              passwordHash: "wrongpasswordhash"
            });

          expect(response.status).toBe(401);
          expect(response.body.error).toBe('Invalid credentials');
        }
        // user account should be locked
        {
          const response = await request(server)
            .post('/auth/login')
            .send(input);

          expect(response.status).toBe(401);
          expect(response.body.error).toBe('User account is locked.');
        }
      }

      // Act
      await redis.del(`Auth:FailedAttempts:${testUser._id}`);
      const response = await request(server)
        .post('/auth/login')
        .send(input);

      // Assert
      expect(response.status).toBe(201);
      expect(response.body.accessToken).toBeDefined();
    });
  });

  describe("resolver", () => {
    describe("[mutation login]", () => {
      it('should return a token when valid credentials are provided', async () => {
        // Arrange
        const input = {
          username: testUser.username,
          passwordHash: testUser.passwordHash,
        } satisfies LoginInput;

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: loginMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.data.login.accessToken).toBeDefined();
      });

      it('should throw error when invalid credentials are provided', async () => {
        // Arrange
        const input: LoginInput = {
          username: testUser.username,
          passwordHash: 'wrongpassword',
        };

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: loginMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(401);
        expect(response.body.error).toBe('Invalid credentials');
      });

      it('should throw error when maximum failed login attempts reached', async () => {
        // Arrange
        const input: LoginInput = {
          username: testUser.username,
          passwordHash: testUser.passwordHash,
        };

        // Act
        for (let i = 0; i < MaxFailedLoginAttempts; i++) {
          let response = await request(server)
            .post('/graphql')
            .send({
              query: loginMutation,
              variables: { input: { username: testUser.username, passwordHash: "wrongpasswordhash" } },
            });

          expect(response.status).toBe(401);
          expect(response.body.error).toBe('Invalid credentials');
        }
        const response = await request(server)
          .post('/graphql')
          .send({
            query: loginMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(401);
        expect(response.body.error).toBe('User account is locked.');
      });

      it('should unlock user after lock session expired', async () => {
        const input: LoginInput = {
          username: testUser.username,
          passwordHash: testUser.passwordHash,
        };

        // Arrange
        {
          for (let i = 0; i < MaxFailedLoginAttempts; i++) {
            let response = await request(server)
              .post('/graphql')
              .send({
                query: loginMutation,
                variables: { input: { username: testUser.username, passwordHash: "wrongpasswordHash" } },
              });

            expect(response.status).toBe(401);
            expect(response.body.error).toBe('Invalid credentials');
          }

          // user account should be locked
          {
            const response = await request(server)
              .post('/graphql')
              .send({
                query: loginMutation,
                variables: { input },
              });

            expect(response.status).toBe(401);
            expect(response.body.error).toBe('User account is locked.');
          }
        }
        // Act
        await redis.del(`Auth:FailedAttempts:${testUser._id}`);
        const response = await request(server)
          .post('/graphql')
          .send({
            query: loginMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.data.login.accessToken).toBeDefined();
      })
    });


    /* 
      please implement the following tests for me:
      [mutation register] should register user when provide valid input
      [mutation register] should throw error user when username length is not between 4 and 20
      [mutation register] should throw error user when provide weak password
      [mutation register] should throw error user when password confirmation mismatch
      [mutation register] should throw error user when user already exists
    */
    describe("[mutation register]", () => {
      it('should register user when provide valid input', async () => {
        // Arrange
        const input = {
          username: 'newuser',
          password: 'StrongPassword123',
          passwordConfirmation: 'StrongPassword123',
        };

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: registerMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.data.register).toBeDefined();
        expect(response.body.data.register.username).toBe(input.username);
      });

      it('should throw error user when username length is not between 4 and 20', async () => {
        // Arrange
        const input = {
          username: 'abc',
          password: 'StrongPassword123',
          passwordConfirmation: 'StrongPassword123',
        };

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: registerMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(400);
        expect(response.body.message[0]).toBe('Username must be between 4 and 20 characters.');
      });

      it('should throw error user when provide weak password', async () => {
        // Arrange
        const input = {
          username: 'newuser',
          password: 'weak',
          passwordConfirmation: 'weak',
        };

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: registerMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(400);
        expect(response.body.message[0]).toBe('password is not strong enough');
      });

      it('should throw error user when password confirmation mismatch', async () => {
        // Arrange
        const input = {
          username: 'newuser',
          password: 'StrongPassword123',
          passwordConfirmation: 'DifferentPassword123',
        };

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: registerMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(400);
        expect(response.body.message[0]).toBe('Password confirmation does not match password');
      });

      it('should throw error user when user already exists', async () => {
        // Arrange
        const input = {
          username: testUser.username,
          password: 'StrongPassword123',
          passwordConfirmation: 'StrongPassword123',
        };

        // Act
        const response = await request(server)
          .post('/graphql')
          .send({
            query: registerMutation,
            variables: { input },
          });

        // Assert
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('User already exists');
      });
    });
  });
});
