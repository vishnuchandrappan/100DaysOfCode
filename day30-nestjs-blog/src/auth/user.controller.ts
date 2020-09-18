import { Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from "src/decorators/get-user.decorator";
import { User } from "./user.entity";
import { UserService } from './user.service';

@Controller('users/:userId')
@UseGuards(AuthGuard())
export class UserController {

  constructor(
    private userService: UserService
  ) { }


  @Post('/follow')
  followUser(
    @Param('userId', ParseIntPipe) userId: number,
    @GetUser() user: User
  ) {
    return this.userService.followUser(userId, user);
  }

  @Get('/followers')
  getFollowers(
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.getFollowers(userId);
  }

  @Get('/following')
  getFollowing(
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.getFollowing(userId);
  }

}
