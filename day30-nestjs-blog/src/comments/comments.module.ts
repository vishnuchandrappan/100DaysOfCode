import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsRepository } from './comments.repository';
import { AuthModule } from '../auth/auth.module';
import { BlogPostModule } from '../blog-post/blog-post.module';

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService],
  imports: [
    TypeOrmModule.forFeature([CommentsRepository]),
    AuthModule,
    BlogPostModule
  ]
})
export class CommentsModule { }
