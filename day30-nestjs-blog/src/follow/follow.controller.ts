import { Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { FollowService } from './follow.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('/user/:userId')
@UseGuards(AuthGuard())
export class FollowController {

  constructor(
    private followService: FollowService
  ) { }

  @Get('followers')
  getFollowers(
    @GetUser() user: User
  ) {
    return user;
  }

  @Post('follow')
  followUser(
    @Param('userId', ParseIntPipe) userId: number,
    @GetUser() user: User
  ) {
    return this.followService.followUser(userId, user);
  }
}
