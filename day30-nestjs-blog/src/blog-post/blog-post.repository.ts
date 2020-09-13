import { EntityRepository, Repository } from "typeorm";
import { BlogPost } from './blog-post.entity';
import { SearchBlogDto } from './dto/search-blog-dto';
import { CreateBlogDto } from './dto/create-blog-dto';
import { SuccessMessage } from "../shared/responses";
import { NotFoundException } from '@nestjs/common';
import { SuccessResponse } from '../shared/interfaces/SuccessMessage.interface';
import { UpdateBlogDto } from './dto/update-blog-dto';

@EntityRepository(BlogPost)
export class BlogPostRepository extends Repository<BlogPost> {

  getPosts = async (
    searchBlogDto: SearchBlogDto,
  ): Promise<BlogPost[]> => {
    const { key } = searchBlogDto;
    const query = this.createQueryBuilder('post');

    if (key) {
      query.andWhere(
        'post.title LIKE :key OR post.body LIKE :key',
        { search: `%${key}%` }
      )
    }

    const posts = await query.getMany();
    return posts;
  }

  createPost = async (
    createBlogDto: CreateBlogDto,
  ): Promise<BlogPost> => {
    const { title, body, image } = createBlogDto;

    const blogPost = new BlogPost();
    blogPost.body = body;
    blogPost.title = title;
    blogPost.image = image;
    await blogPost.save();

    return blogPost;
  }

  deletePost = async (
    id: number
  ): Promise<SuccessResponse> => {
    const { affected } = await BlogPost.delete({ id });

    if (affected === 0) {
      throw new NotFoundException();
    }

    return SuccessMessage("Post Deleted Successfully");
  }

  updatePost = async (
    blogPost: BlogPost,
    updateBlogDto: UpdateBlogDto
  ): Promise<BlogPost> => {
    const { title, image, body } = updateBlogDto;

    if (title) { blogPost.title = title }
    if (body) { blogPost.body = body }
    if (image) { blogPost.image = image }

    await blogPost.save();

    return blogPost;
  }

}