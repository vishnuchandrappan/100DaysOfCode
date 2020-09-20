import { Controller, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from "src/decorators/get-user.decorator";
import { User } from "./user.entity";
import { UserService } from './user.service';
import { MailgunService, EmailOptions } from '@nextnm/nestjs-mailgun';

@Controller('users/:userId')
@UseGuards(AuthGuard())
export class UserController {

  constructor(
    private userService: UserService,
    private mailgunService: MailgunService
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

  @Get('/test')
  test() {
    const options: EmailOptions = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'cempfoss@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!',
      html: '',
      attachment: ''
    };
    return this.mailgunService.sendEmail(options);
  }

}
