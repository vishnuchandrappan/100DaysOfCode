import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { FollowController } from './follow.controller';
import { FollowRepository } from './follow.repository';
import { FollowService } from './follow.service';

@Module({
  controllers: [FollowController],
  providers: [FollowService],
  imports: [
    TypeOrmModule.forFeature([FollowRepository]),
    AuthModule,
  ]
})
export class FollowModule { }
