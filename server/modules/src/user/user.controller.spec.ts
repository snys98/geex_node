import { Test, TestingModule } from '@nestjs/testing';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserController } from './user.controller';
import { UserClass } from './user.model';
import { getModelToken } from '@geexbox/nestjs-typegoose';
import { mockData } from '../../test/mocks/data.mock';

describe('UserController', () => {
  let controller: UserController;
  let userModel: ReturnModelType<typeof UserClass>;

  beforeEach(async () => {
    const userModelToken = getModelToken(UserClass.name);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: userModelToken,
          useValue: {
            find: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValue(Object.values(mockData.users)),
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userModel = module.get<ReturnModelType<typeof UserClass>>(userModelToken);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const users = await controller.getUsers();
      expect(users).toEqual(Object.values(mockData.users));
    });

    it('should call the logger with the correct parameters', async () => {
      const loggerSpy = jest.spyOn(controller['logger'], 'info');
      await controller.getUsers();
      expect(loggerSpy).toHaveBeenCalled();
    });
  });
});
