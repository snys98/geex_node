import { Cache } from 'cache-manager';

import { JwtService } from '@nestjs/jwt';
import { getModelToken } from '@geexbox/nestjs-typegoose';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { mockData } from '../../test/mocks/data.mock';
import { UnauthorizedException } from '@nestjs/common';
import { Editable } from '@geex/nest';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { UserClass } from '../user/user.model';
import { ReturnModelType, getModelForClass } from '@typegoose/typegoose';
import { AuthService, MaxFailedLoginAttempts } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let module: TestingModule;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(UserClass.name),
          useValue: {
            findOne: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValue({
                ...mockData.users.test,
                toObject: jest.fn().mockReturnValue({ ...mockData.users.test }),
                save: jest.fn().mockResolvedValue(true),
              })
            })
          },
        },
        AuthController,
        AuthService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: jest.fn().mockResolvedValue(undefined),
            set: jest.fn().mockResolvedValue("OK"),
            del: jest.fn().mockResolvedValue("OK"),
          } as Partial<Cache>
        },
        {
          provide: JwtService,
          useValue: {
            // sign: jest.fn().mockReturnValue('token'),
            signAsync: jest.fn().mockReturnValue('token'),
          } as Partial<JwtService>,
        },
      ]
    }).compile();
    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should validate user', async () => {
    expect(await controller.login({ username: 'test', password: 'test' })).toMatchObject({ id: mockData.users.test.id, access_token: mockData.token });
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(UnauthorizedException);
  });

  it('should generate token', async () => {
    expect(await controller.login({ username: 'test', password: "test" })).toMatchObject({ id: mockData.users.test.id, access_token: mockData.token });
  });

  it('should store token', async () => {
    expect(await controller.login({ username: 'test', password: "test" })).toMatchObject({ id: mockData.users.test.id, access_token: mockData.token });
    const cache = module.get(CACHE_MANAGER) as Cache;
    expect(cache.set).toHaveBeenCalledWith(`Auth:Session:${mockData.users.test.id}`, expect.anything(), expect.anything());
  });

  it('should lock user after max failed login attempts', async () => {
    let failedAttempts = undefined;
    let userMock = new UserClass("test", "test");
    const userModel = module.get<ReturnModelType<typeof UserClass>>(getModelToken(UserClass.name));
    jest.spyOn(userModel, 'findOne').mockReturnValue({
      exec: jest.fn().mockResolvedValue(userMock)
    } as any);
    const cache = module.get<Cache>(CACHE_MANAGER);
    jest.spyOn(cache, 'get').mockImplementation(jest.fn().mockImplementation((key, value) => failedAttempts));
    jest.spyOn(cache, 'set').mockImplementation(jest.fn().mockImplementation((key, value) => failedAttempts = value));
    jest.spyOn(cache, 'del').mockImplementation(jest.fn().mockImplementation((key, value) => failedAttempts = undefined));
    const execution = controller.login({ username: 'test', password: 'wrong' });
    await expect(execution).rejects.toThrow(UnauthorizedException);
    expect(failedAttempts).toBe(1);
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(UnauthorizedException);
    expect(failedAttempts).toBe(2);
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(UnauthorizedException);
    expect(failedAttempts).toBe(MaxFailedLoginAttempts);
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(UnauthorizedException);
    expect(failedAttempts).toBe(MaxFailedLoginAttempts);
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(/User account is locked./);
    expect(failedAttempts).toBe(MaxFailedLoginAttempts);
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(/User account is locked./);
  });

  it('locked user should fail when validate', async () => {
    const userModel = module.get<ReturnModelType<typeof UserClass>>(getModelToken(UserClass.name));
    jest.spyOn(userModel, 'findOne').mockReturnValue({
      exec: jest.fn().mockResolvedValue({
        ...mockData.users.test,
        locked: true,
        toObject: jest.fn().mockReturnValue({ ...mockData.users.test, locked: true }),
        save: jest.fn().mockResolvedValue(true),
      })
    } as any);
    await expect(controller.login({ username: 'test', password: 'wrong' })).rejects.toThrow(/User account is locked./);
  });
});
