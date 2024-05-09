// FILEPATH: /W:/workspace/geex/geex-node-template/server/modules/identity/src/user/user.resolver.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { mockData } from '../../test/mocks/mock-data';

describe('UserResolver', () => {
  let userResolver: UserResolver;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: {
            getUsers: jest.fn().mockResolvedValue(mockData.users),
          },
        },
      ],
    }).compile();

    userResolver = module.get<UserResolver>(UserResolver);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userResolver).toBeDefined();
  });

  it('should call userService.getUsers and return correct data', async () => {
    const users = await userResolver.users();
    expect(userService.getUsers).toHaveBeenCalled();
    expect(users.length).toEqual(mockData.users.length);
  });
});
