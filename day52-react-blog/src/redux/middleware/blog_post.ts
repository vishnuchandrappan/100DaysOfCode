import { Action } from '../_interfaces';
import {
  Types,
  authApiRequest,
  setSubmitting,
  resetSubmitting,
  showDangerToast
} from '../actions'

const GET_ALL = "/blog_posts/all";
const LIKE_URL = "/like/blog_posts";

export const initialBlogPostsFLow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.INITIAL_BLOG_POST_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        GET_ALL,
        action.payload,
        Types.INITIAL_BLOG_POST_REQUEST_SUCCESS,
        Types.INITIAL_BLOG_POST_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.INITIAL_BLOG_POST_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  } else if (action.type === Types.INITIAL_BLOG_POST_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};


export const likeBlogPostFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LIKE_BLOG_POST_REQUEST) {
    dispatch(
      authApiRequest(
        "POST",
        `${LIKE_URL}/${action.payload}`,
        {},
        Types.LIKE_BLOG_POST_REQUEST_SUCCESS,
        Types.LIKE_BLOG_POST_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.LIKE_BLOG_POST_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  } else if (action.type === Types.LIKE_BLOG_POST_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};

export const blogPostMiddleware = [
  initialBlogPostsFLow,
  likeBlogPostFlow
]