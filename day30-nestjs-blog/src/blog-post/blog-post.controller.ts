import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { SearchBlogDto } from './dto/search-blog-dto';
import { BlogPost } from './blog-post.entity';
import { CreateBlogDto } from './dto/create-blog-dto';
import { SuccessResponse } from '../shared/interfaces/SuccessMessage.interface';
import { UpdateBlogDto } from './dto/update-blog-dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../decorators/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('blog-post')
@UseGuards(AuthGuard())
export class BlogPostController {
  constructor(private blogPostService: BlogPostService) { }

  @Get()
  index(
    @Query(ValidationPipe) searchBlogDto: SearchBlogDto,
    @GetUser() user: User,
  ): Promise<BlogPost[]> {
    return this.blogPostService.getPosts(searchBlogDto, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createBlogDto: CreateBlogDto,
    @GetUser() user: User,
  ): Promise<BlogPost> {
    return this.blogPostService.createPost(createBlogDto, user);
  }

  @Get(':id')
  show(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<BlogPost> {
    return this.blogPostService.getPostById(id, user);
  }

  @Delete(':id')
  destroy(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<SuccessResponse> {
    return this.blogPostService.deletePost(id, user);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<BlogPost> {
    return this.blogPostService.updatePost(
      id,
      updateBlogDto,
      user
    );
  }
}
