import { Action } from '../_interfaces';
import {
  Types,
  authApiRequest,
  setSubmitting,
  resetSubmitting,
  showDangerToast,
  userRequest, initialBlogPostsRequest, getCommentsRequest
} from '../actions'
import { GET_ALL_BLOG_POSTS, LIKE_BLOG_POST, COMMENT_BLOG_POST } from '../../utils/urls';


export const initialBlogPostsFLow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.INITIAL_BLOG_POST_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        GET_ALL_BLOG_POSTS,
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
        `${LIKE_BLOG_POST}/${action.payload}`,
        {},
        Types.LIKE_BLOG_POST_REQUEST_SUCCESS,
        Types.LIKE_BLOG_POST_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.LIKE_BLOG_POST_REQUEST_SUCCESS) {
    dispatch(userRequest());
    dispatch(initialBlogPostsRequest());
    dispatch(resetSubmitting());
  } else if (action.type === Types.LIKE_BLOG_POST_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};


export const createCommentFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.CREATE_COMMENT_REQUEST) {
    dispatch(
      authApiRequest(
        "POST",
        COMMENT_BLOG_POST.replace('{{blogPostId}}', action.meta.blogPostId),
        action.payload,
        Types.CREATE_COMMENT_REQUEST_SUCCESS,
        Types.CREATE_COMMENT_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.CREATE_COMMENT_REQUEST_SUCCESS) {
    dispatch(resetSubmitting());
    dispatch(getCommentsRequest());
  } else if (action.type === Types.CREATE_COMMENT_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};


export const blogPostMiddleware = [
  initialBlogPostsFLow,
  likeBlogPostFlow,
  createCommentFlow
]