import { JwtModule } from '@nestjs/jwt';
import { GeexConfig } from '../geex.config';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [GeexConfig],
      useFactory: (config: GeexConfig) => {
        return {
          secret: config.jwt?.secret ?? "secretKey", // replace with your own secret key  
          signOptions: { expiresIn: '60m', ...config.jwt?.signOptions },
          verifyOptions: {
            ignoreExpiration: true,
          },
        };
      },
    }),
  ],
})
export class GeexJwtModule { }
