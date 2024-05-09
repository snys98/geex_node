import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginInput } from '../shared/inputs/login.input';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            validateUser: jest.fn(),
            signIn: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('login', () => {
    it('should return a token when valid credentials are provided', async () => {
      const user = { id: '1', username: 'test', passwordHash: '098f6bcd4621d373cade4e832627b4f6' };
      const { id, ...loginInput } = user;
      const token = 'token';

      jest.spyOn(authService, 'validateUser').mockResolvedValueOnce(user);
      jest.spyOn(authService, 'signIn').mockResolvedValueOnce({ id: user.id, accessToken: token });

      const res = await authController.login(loginInput);
      expect(res.accessToken).toBe(token);
    });

    it('should throw an error when invalid credentials are provided', async () => {
      const input: LoginInput = {
        username: 'test',
        passwordHash: 'wrongpassword',
      };

      // jest.spyOn(authService, 'validateUser').mockResolvedValueOnce(null);

      await expect(authController.login(input)).rejects.toThrow('Invalid credentials');
    });
  });
});
