// FILEPATH: /W:/workspace/geex/geex-node-template/server/modules/identity/src/user/user.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockData } from '../../test/mocks/mock-data';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: jest.fn().mockResolvedValue(mockData.users),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should call userService.getUsers', async () => {
    await userController.getUsers();
    expect(userService.getUsers).toHaveBeenCalled();
  });

  it('should return the correct users', async () => {
    const users = await userController.getUsers();
    expect(users.length).toEqual(mockData.users.length);
  });
});
