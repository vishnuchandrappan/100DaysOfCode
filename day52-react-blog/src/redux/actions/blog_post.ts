import { Action, BlogPostFinalValues } from "../_interfaces";

const entity = "[Blog Post]";

export const Types = {
  INITIAL_BLOG_POST_REQUEST: `${entity} Request`,
  INITIAL_BLOG_POST_REQUEST_SUCCESS: `${entity} Request Success`,
  LIKE_BLOG_POST_REQUEST: `${entity} Like Request`,
  LIKE_BLOG_POST_REQUEST_SUCCESS: `${entity} Like Success`,
  CREATE_COMMENT_REQUEST: `${entity} Create Comment Request`,
  CREATE_COMMENT_REQUEST_SUCCESS: `${entity} Create Comment Success`,
  CREATE_BLOG_POST_REQUEST: `${entity} Create BlogPost Request`,
  CREATE_BLOG_POST_SUCCESS: `${entity} Create BlogPost Success`,
}

export const initialBlogPostsRequest = (): Action => ({
  type: Types.INITIAL_BLOG_POST_REQUEST
});

export const likeBlogPost = (blogPostId: number): Action => ({
  type: Types.LIKE_BLOG_POST_REQUEST,
  payload: blogPostId
})

export const createComment = (
  blogPostId: number,
  comment: any
): Action => ({
  type: Types.CREATE_COMMENT_REQUEST,
  payload: comment,
  meta: { blogPostId }
})

export const createBlogPost = (values: BlogPostFinalValues): Action => ({
  type: Types.CREATE_BLOG_POST_REQUEST,
  payload: values
})