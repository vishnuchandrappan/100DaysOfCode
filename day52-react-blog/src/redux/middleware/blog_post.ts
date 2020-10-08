import { Action } from '../_interfaces';
import {
  Types,
  authApiRequest,
  setSubmitting,
  resetSubmitting,
  showDangerToast
} from '../actions'

const GET_ALL = "/blog_posts/all";

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
  }

  if (action.type === Types.INITIAL_BLOG_POST_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  }

  if (action.type === Types.INITIAL_BLOG_POST_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};

export const blogPostMiddleware = [
  initialBlogPostsFLow
]