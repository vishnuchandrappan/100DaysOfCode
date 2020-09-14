import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BlogPostModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
