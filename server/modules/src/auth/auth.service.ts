import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  LoggerService,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@geexbox/nestjs-typegoose';

import { UserClass } from '../user/user.model';
// import { serviceLocator } from '../../../../libs/nest/src';
import { ReturnModelType } from '@typegoose/typegoose';
import { Logger } from '@geex/nest';

export const MaxFailedLoginAttempts = 3;
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectModel(UserClass) private userModel: ReturnModelType<typeof UserClass>,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    private readonly jwtService: JwtService,
  ) {
    // this.userModel = .model('User', UserSchema) as Model<User>;
  }

  async validateUser(username: string, password: string): Promise<Partial<UserClass>> {
    this.logger.info(`validating user for username: ${username}`);
    const user = await this.userModel.findOne({ username: username }).exec();
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const failedAttemptsKey = `Auth:FailedAttempts:${user.id}`;
    if (user.locked) {
      throw new UnauthorizedException("User account is locked.");
    }
    if (user.password === password) {
      await this.cache.del(failedAttemptsKey);
      const { password, ...result } = user.toObject();
      return result;
    }
    else {
      // If the password is incorrect, increase the failed login attempts.  
      let failedAttempts = await this.cache.get<number>(failedAttemptsKey) || 0;
      failedAttempts++;
      await this.cache.set(failedAttemptsKey, failedAttempts, 1000 * 60 * 5); // Set the cache to expire after 5 minutes.  
      this.logger.info(`Failed login attempts set for ${username}: ${failedAttempts}`);
      if (failedAttempts >= MaxFailedLoginAttempts) {
        try {
          await user.lock()
        } catch (error) {
          this.logger.error(`Failed to lock user for ${username}`);
        }
      }
      throw new UnauthorizedException("Invalid credentials");
    }
  }

  async signIn(user: Partial<UserClass>) {
    const payload = {
      sub: user.id,
      id: user.id,
      username: user.username,
    };
    const tokenModel = {
      id: user.id,
      access_token: await this.jwtService.signAsync(payload),
    };
    await this.cache.set(`Auth:Session:${user.id}`, tokenModel, 60 * 60 * 24 * 7);
    return tokenModel;
  }
}  
