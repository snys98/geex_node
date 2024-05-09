import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@geexbox/nestjs-typegoose';
import { TokenDto } from '../shared/dtos/token.dto';

import { User } from '../user/user.entity';
import { ReturnModelType } from '@typegoose/typegoose';

export const MaxFailedLoginAttempts = 3;
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    private readonly jwtService: JwtService,
  ) {
    // this.userModel = .model('User', UserSchema) as Model<User>;
  }

  async register(username: string, password: string) {
    // check if the user already exists
    const userExists = await this.userModel.findOne({ username });
    if (userExists?.id) {
      throw new UnauthorizedException("User already exists");
    }
    const user = new this.userModel({ username });
    await user.setPassword(password);
    await user.save();
    return user;
  }

  async validateUser(username: string, passwordHash: string): Promise<Partial<User>> {
    this.logger.log(`validating user for username: ${username}`);
    const user = await this.userModel.findOne({ username: username }).populate("passwordHash").exec();
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const failedAttemptsKey = `Auth:FailedAttempts:${user.id}`;
    let failedAttempts = await this.cache.get<number>(failedAttemptsKey) || 0;
    if (failedAttempts == 0 && user.locked) {
      try {
        user.unlock()
        await user.save();
      } catch (error) {
        this.logger.error(`Failed to unlock user for user [${username}]`);
        this.logger.error(error);
      }
    }
    if (user.locked) {
      throw new UnauthorizedException("User account is locked.");
    }

    if (user.passwordHash === passwordHash) {
      await this.cache.del(failedAttemptsKey);
      const { passwordHash: password, ...result } = user.toObject();
      return result;
    }
    else {
      // If the password is incorrect, increase the failed login attempts.  
      failedAttempts++;
      await this.cache.set(failedAttemptsKey, failedAttempts, 1000 * 60 * 5); // Set the cache to expire after 5 minutes.  
      this.logger.log(`Failed login attempts set for user [${username}]: ${failedAttempts}`);
      if (failedAttempts >= MaxFailedLoginAttempts) {
        try {
          user.lock()
          await user.save();
        } catch (error) {
          this.logger.error(`Failed to lock user for ${username}`);
          this.logger.error(error);
        }
      }
      throw new UnauthorizedException("Invalid credentials");
    }
  }

  async signIn(user: Partial<User>) {
    const payload = {
      sub: user.id,
      id: user.id,
      username: user.username,
    };
    const tokenDto = new TokenDto({
      id: user.id,
      accessToken: await this.jwtService.signAsync(payload),
    });
    await this.cache.set(`Auth:Session:${user.id}`, tokenDto, 60 * 60 * 24 * 7);
    return tokenDto;
  }
}  
