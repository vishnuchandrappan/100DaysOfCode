import { Action, BlogPostsResponse } from "../_interfaces";


const entity = "[Blog Post]";

export const Types = {
  INITIAL_BLOG_POST_REQUEST: `${entity} Request`,
  INITIAL_BLOG_POST_REQUEST_SUCCESS: `${entity} Request Success`,
  INITIAL_BLOG_POST_REQUEST_ERROR: `${entity} Request Error`,
  LIKE_BLOG_POST_REQUEST: `${entity} Like Request`,
  LIKE_BLOG_POST_REQUEST_SUCCESS: `${entity} Like Request Success`,
  LIKE_BLOG_POST_REQUEST_ERROR: `${entity} Like Request Error`,
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

