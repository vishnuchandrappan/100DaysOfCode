import { Action, BlogPostsResponse } from "../_interfaces";


const entity = "[Blog Post]";

export const Types = {
  INITIAL_BLOG_POST_REQUEST: `${entity} Request`,
  INITIAL_BLOG_POST_REQUEST_SUCCESS: `${entity} Request Success`,
  INITIAL_BLOG_POST_REQUEST_ERROR: `${entity} Request Error`,
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

