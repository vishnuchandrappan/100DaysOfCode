import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import * as config from 'config';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MailgunModule } from '@nextnm/nestjs-mailgun'

const JwtConfig = config.get('jwt');

@Module({
  providers: [AuthService, JwtStrategy, UserService],
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || JwtConfig.secret,
      signOptions: {
        expiresIn: JwtConfig.expiresIn,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
    MailgunModule.forRoot({
      DOMAIN: process.env.MAIL_DOMAIN,
      API_KEY: process.env.MAIL_API_KEY,
    }),
  ],
  controllers: [AuthController, UserController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule { }
