import { Injectable, NotFoundException } from '@nestjs/common';
import { SearchBlogDto } from './dto/search-blog-dto';
import { BlogPost } from './blog-post.entity';
import { BlogPostRepository } from './blog-post.repository';
import { CreateBlogDto } from './dto/create-blog-dto';
import { SuccessResponse } from '../shared/interfaces/SuccessMessage.interface';
import { UpdateBlogDto } from './dto/update-blog-dto';
import { User } from '../auth/user.entity';

@Injectable()
export class BlogPostService {
  constructor(private blogPostRepository: BlogPostRepository) {}

  async getPosts(
    searchBlogDto: SearchBlogDto,
    user: User,
  ): Promise<BlogPost[]> {
    return this.blogPostRepository.getPosts(searchBlogDto, user);
  }

  async createPost(
    createBlogDto: CreateBlogDto,
    user: User,
  ): Promise<BlogPost> {
    return this.blogPostRepository.createPost(createBlogDto, user);
  }

  async getPostById(id: number, user: User): Promise<BlogPost> {
    const blog = await this.blogPostRepository.findOne({
      id,
      userId: user.id,
    });

    if (!blog) {
      throw new NotFoundException();
    }

    return blog;
  }

  async deletePost(id: number, user: User): Promise<SuccessResponse> {
    return this.blogPostRepository.deletePost(id, user);
  }

  async updatePost(
    id: number,
    updateBlogDto: UpdateBlogDto,
    user: User,
  ): Promise<BlogPost> {
    const post = await this.getPostById(id, user);
    return this.blogPostRepository.updatePost(post, updateBlogDto);
  }
}
