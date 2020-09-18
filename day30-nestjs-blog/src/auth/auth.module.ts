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
  ],
  controllers: [AuthController, UserController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule { }
