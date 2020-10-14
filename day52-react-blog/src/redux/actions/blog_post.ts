import { Action, BlogPostsResponse } from "../_interfaces";


const entity = "[Blog Post]";

export const Types = {
  INITIAL_BLOG_POST_REQUEST: `${entity} Request`,
  INITIAL_BLOG_POST_REQUEST_SUCCESS: `${entity} Request Success`,
  INITIAL_BLOG_POST_REQUEST_ERROR: `${entity} Request Error`,
  LIKE_BLOG_POST_REQUEST: `${entity} Like Request`,
  LIKE_BLOG_POST_REQUEST_SUCCESS: `${entity} Like Success`,
  LIKE_BLOG_POST_REQUEST_ERROR: `${entity} Like Error`,
  CREATE_COMMENT_REQUEST: `${entity} Create Comment Request`,
  CREATE_COMMENT_REQUEST_SUCCESS: `${entity} Create Comment Success`,
  CREATE_COMMENT_REQUEST_ERROR: `${entity} Create Comment Error`,
}

export const initialBlogPostsRequest = (): Action => ({
  type: Types.INITIAL_BLOG_POST_REQUEST
});

export const initialBlogPostsRequestSuccess = (
  blogPostsResponse: BlogPostsResponse
): Action => ({
  type: Types.INITIAL_BLOG_POST_REQUEST_SUCCESS,
  payload: blogPostsResponse
});

export const likeBlogPost = (blogPostId: number): Action => ({
  type: Types.LIKE_BLOG_POST_REQUEST,
  payload: blogPostId
})

export const createComment = (blogPostId: number, comment: any): Action => ({
  type: Types.CREATE_COMMENT_REQUEST,
  payload: comment,
  meta: { blogPostId }
})