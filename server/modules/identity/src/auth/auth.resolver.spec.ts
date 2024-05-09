import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LoginInput } from '../shared/inputs/login.input';
import { HttpException } from '@nestjs/common';

describe('AuthResolver', () => {
  let resolver: AuthResolver;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: AuthService,
          useValue: {
            validateUser: jest.fn(),
            signIn: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
    authService = module.get<AuthService>(AuthService);
  });

  it('should return a token when valid credentials are provided', async () => {
    const user = { id: '1', username: 'test', passwordHash: '098f6bcd4621d373cade4e832627b4f6' };
    const { id, ...loginInput } = user;
    const token = 'token';

    jest.spyOn(authService, 'validateUser').mockResolvedValue(user);
    jest.spyOn(authService, 'signIn').mockResolvedValue({ id: user.id, accessToken: token });

    const res = await resolver.login({ ...loginInput, passwordHash: user.passwordHash});
    expect(res.accessToken).toBe(token);
    expect(authService.validateUser).toHaveBeenCalledWith(user.username, user.passwordHash);
    expect(authService.signIn).toHaveBeenCalledWith(user);
  });

  it('should throw an error when invalid credentials are provided', async () => {
    const input: LoginInput = {
      username: 'test',
      passwordHash: 'wrongpassword',
    };

    await expect(resolver.login(input)).rejects.toThrow(new HttpException('Invalid credentials', 400));
    expect(authService.validateUser).toHaveBeenCalledWith(input.username, input.passwordHash);
  });
});
