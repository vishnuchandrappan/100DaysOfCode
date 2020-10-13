import { Types } from '../actions/blog_post'
import { BlogPostsResponse, Action } from '../_interfaces/index';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const blogPostState: {
  blogPosts: BlogPostsResponse[]
} = {
  blogPosts: []
}

function baseReducer(
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

    // case Types.LIKE_BLOG_POST_REQUEST_SUCCESS:
    //   temp = state.blogPosts.map(post => {

    //     if (post.id === action.payload.id) {
    //       if (action.payload.deleted) {
    //         return {
    //           ...post,
    //           likes_count: post.likes_count - 1
    //         }
    //       }
    //       return {
    //         ...post,
    //         likes_count: post.likes_count + 1
    //       }
    //     }

    //     return post;
    //   });

    //   return {
    //     blogPosts: temp
    //   };

    default:
      return state;
  }
}

export const blogPostReducer = persistReducer(
  {
    storage,
    key: 'blogPosts',
    whitelist: ["blogPosts"]
  },
  baseReducer
)

export default blogPostReducer