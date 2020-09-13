import { Injectable, NotFoundException } from '@nestjs/common';
import { SearchBlogDto } from './dto/search-blog-dto';
import { BlogPost } from './blog-post.entity';
import { BlogPostRepository } from './blog-post.repository';
import { CreateBlogDto } from './dto/create-blog-dto';
import { SuccessResponse } from '../shared/interfaces/SuccessMessage.interface';
import { UpdateBlogDto } from './dto/update-blog-dto';

@Injectable()
export class BlogPostService {

  constructor(
    private blogPostRepository: BlogPostRepository
  ) { }

  async getPosts(searchBlogDto: SearchBlogDto): Promise<BlogPost[]> {
    return this.blogPostRepository.getPosts(searchBlogDto);
  }

  async createPost(createBlogDto: CreateBlogDto): Promise<BlogPost> {
    return this.blogPostRepository.createPost(createBlogDto);
  }

  async getPostById(id: number): Promise<BlogPost> {
    const blog = await this.blogPostRepository.findOne(id);
    if (!blog) { throw new NotFoundException(); }
    return blog;
  }

  async deletePost(id: number): Promise<SuccessResponse> {
    return this.blogPostRepository.deletePost(id);
  }

  async updatePost(id: number, updateBlogDto: UpdateBlogDto): Promise<BlogPost> {
    const post = await this.getPostById(id);
    return this.blogPostRepository.updatePost(post, updateBlogDto);
  }

}
