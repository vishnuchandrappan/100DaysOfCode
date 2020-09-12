import { Controller, Post, Body, ValidationPipe, UsePipes, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { JwtResponse } from './jwt-payload.interface';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) { }


  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<JwtResponse> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard()) //custom guard: similar to middleware
  test(@GetUser() user) { // @GetUser: custom decorator that extracts user from request
    console.log(user)
    return "test";
  }

}
