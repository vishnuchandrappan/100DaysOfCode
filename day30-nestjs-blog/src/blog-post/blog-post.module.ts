import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostRepository } from './blog-post.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [BlogPostController],
  providers: [BlogPostService],
  imports: [
    TypeOrmModule.forFeature([BlogPostRepository]),
    AuthModule,
  ],
  exports: [BlogPostService, TypeOrmModule]
})
export class BlogPostModule { }
