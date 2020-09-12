import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy
  ],
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: 'SomeRandomString',
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  exports: [
    JwtStrategy,
    PassportModule,
  ]
})

export class AuthModule { }
