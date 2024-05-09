import { Test, TestingModule } from '@nestjs/testing';
import { ReturnModelType } from '@typegoose/typegoose';
import { getModelToken } from '@geexbox/nestjs-typegoose';
import { UserService } from "./user.service";
import { User } from './user.entity';
import { mockData } from '../../test/mocks/mock-data';

describe('UserService', () => {
  let service: UserService;
  let userModel: ReturnModelType<typeof User>;

  beforeEach(async () => {
    const userModelToken = getModelToken(User.name);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: userModelToken,
          useValue: {
            find: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValue(mockData.users.map((user) => {
                const { passwordHash, ...rest } = user;
                return rest;
              }))
            }),
          },
        },
      ],
    }).compile();

    service = module.get(UserService);
    userModel = module.get<ReturnModelType<typeof User>>(userModelToken);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call userModel.find', async () => {
    await service.getUsers();
    expect(userModel.find).toHaveBeenCalled();
  });

  it('should return the correct users', async () => {
    const users = await service.getUsers();
    expect(users.length).toEqual(mockData.users.length);
    users.forEach((user, index) => {
      expect(user.id).toEqual(mockData.users[index].id);
      expect(user.passwordHash).toBeUndefined();
    });
  });
});
