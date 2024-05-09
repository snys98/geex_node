import { Test, TestingModule } from '@nestjs/testing';
import { AuthService, MaxFailedLoginAttempts } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@geexbox/nestjs-typegoose';
import { Cache } from 'cache-manager';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '../user/user.entity';
import { mockData } from '../../test/mocks/mock-data';

describe('AuthService', () => {
  let authService: AuthService;
  let userModel: ReturnModelType<typeof User>;
  let cache: Cache;
  let jwtService: JwtService;
  const testUser = mockData.users.find((user) => user.username === "test")!;

  beforeEach(async () => {
    const userModelToken = getModelToken(User.name);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: userModelToken,
          useValue: {
            prototype: jest.fn(),
            find: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValue(mockData.users.map((user) => {
                const { password, ...rest } = user;
                return rest;
              }))
            }),
          },
        },
        {
          provide: 'CACHE_MANAGER',
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
            del: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userModel = module.get(getModelToken('User'));
    cache = module.get<Cache>('CACHE_MANAGER');
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should validate user successfully', async () => {
    jest.mocked(userModel).findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue({ ...testUser }),
      }),
    });
    const result = await authService.validateUser(testUser.username, testUser.passwordHash);
    expect(result).toMatchObject({ username: testUser.username });
  });

  it('should throw UnauthorizedException if user not found', async () => {
    jest.mocked(userModel).findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      }),
    });
    await expect(authService.validateUser(testUser.username, testUser.passwordHash)).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException if user is locked', async () => {
    jest.mocked(userModel).findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue({ ...testUser, locked: true }),
      }),
    });
    jest.mocked(cache).get = jest.fn().mockResolvedValue(MaxFailedLoginAttempts);
    await expect(authService.validateUser(testUser.username, testUser.passwordHash)).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException if password is incorrect', async () => {
    jest.mocked(userModel).findOne = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue({ ...testUser }),
      }),
    });
    await expect(authService.validateUser(testUser.username, 'wrongPassword')).rejects.toThrow(UnauthorizedException);
  });

  it('should sign in user successfully', async () => {
    const tokenModel = {
      id: testUser.id,
      accessToken: 'token',
    };
    jest.mocked(jwtService).signAsync.mockResolvedValue("token");
    const result = await authService.signIn(testUser);
    expect(result).toEqual(tokenModel);
  });

  // todo: mock ctor and finish this test
  xit('should register user successfully', async () => {
    jest.mocked(userModel).findOne = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(null),
    });
    jest.mocked(userModel).create = jest.fn().mockResolvedValue({ ...testUser });
    const result = await authService.register(testUser.username, testUser.password);
    expect(result).toMatchObject({ username: testUser.username });
  });

  // todo: mock ctor and finish this test
  xit('should throw UnauthorizedException if user already exists', async () => {
    jest.mocked(userModel).findOne = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue({ ...testUser }),
    });
    await expect(authService.register(testUser.username, testUser.password)).rejects.toThrow(UnauthorizedException);
  });
});
