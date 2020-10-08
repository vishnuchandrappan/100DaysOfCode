import { Types } from '../actions/blog_post'
import { BlogPostsResponse, Action } from '../_interfaces/index';

const blogPostState: {
  blogPosts: BlogPostsResponse[]
} = {
  blogPosts: []
}

export function blogPostReducer(
  state = blogPostState,
  action: Action
) {
  switch (action.type) {
    case Types.INITIAL_BLOG_POST_REQUEST_SUCCESS:

      let temp = [];

      for (const key in action.payload) {
        if (Object.prototype.hasOwnProperty.call(action.payload, key)) {
          temp.push(action.payload[key]);
        }
      }

      return {
        blogPosts: [
          ...blogPostState.blogPosts,
          ...action.payload
        ]
      };

    default:
      return state;
  }
}