import { Body, Controller, Delete, Get, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { SearchBlogDto } from './dto/search-blog-dto';
import { BlogPost } from './blog-post.entity';
import { CreateBlogDto } from './dto/create-blog-dto';
import { SuccessResponse } from '../shared/interfaces/SuccessMessage.interface';
import { UpdateBlogDto } from './dto/update-blog-dto';

@Controller('blog-post')
export class BlogPostController {

  constructor(
    private blogPostService: BlogPostService
  ) { }



  @Get()
  index(
    @Query(ValidationPipe) searchBlogDto: SearchBlogDto,
  ): Promise<BlogPost[]> {
    return this.blogPostService.getPosts(searchBlogDto);
  }



  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createBlogDto: CreateBlogDto,
  ): Promise<BlogPost> {
    return this.blogPostService.createPost(createBlogDto);
  }


  @Get(':id')
  show(
    @Query('id', ParseIntPipe) id: number,
  ): Promise<BlogPost> {
    return this.blogPostService.getPostById(id);
  }


  @Delete(':id')
  destroy(
    @Query('id', ParseIntPipe) id: number,
  ): Promise<SuccessResponse> {
    return this.blogPostService.deletePost(id);
  }


  @Put(':id')
  @UsePipes(ValidationPipe)
  update(
    @Query('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto
  ): Promise<BlogPost> {
    return this.blogPostService.updatePost(id, updateBlogDto);
  }
}
