/**
 * In case of dynamic URLs, use  {{paramName}}
 * and then replace it with necessary content with
 * .replace("{{paramName}}", value)
 */

export const AUTH_URLS = {
  LOGOUT: "/auth/logout",
  LOGIN: "/auth/login",
  SIGNUP: "/users",
}

export const USER_URLS = {
  AUTH_USER: '/auth/me'
}

export const BLOG_POST_URLS = {
  GET_ALL_BLOG_POSTS: "/blog_posts/all",
  LIKE_BLOG_POST: "/like/blog_posts",
  COMMENT_BLOG_POST: "/blog_posts/{{blogPostId}}/comments",
  CREATE_BLOG_POST: "/blog_posts",
}

export const COMMENT_URLS = {
  GET_COMMENTS: "/blog_posts/{{blogPostId}}/comments",
  LIKE_COMMENT: "/like/comments",
}

export const TAG_URLS = {
  GET_TAGS: "/tags"
}