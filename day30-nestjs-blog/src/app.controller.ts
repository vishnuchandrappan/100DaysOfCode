import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as gravatar from 'gravatar';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  test(): string {
    return gravatar.url("john@example.com");
  }
}
