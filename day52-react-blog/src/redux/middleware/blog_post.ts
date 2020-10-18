import { Action } from '../_interfaces';
import {
  Types,
  authApiRequest,
  setSubmitting,
  resetSubmitting,
  userRequest, initialBlogPostsRequest, getCommentsRequest
} from '../actions'
import { BLOG_POST_URLS } from '../../utils/urls';

const initialBlogPostsFLow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.INITIAL_BLOG_POST_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        BLOG_POST_URLS.GET_ALL_BLOG_POSTS,
        action.payload,
        Types.INITIAL_BLOG_POST_REQUEST_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.INITIAL_BLOG_POST_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  }
};


const likeBlogPostFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LIKE_BLOG_POST_REQUEST) {
    dispatch(
      authApiRequest(
        "POST",
        `${BLOG_POST_URLS.LIKE_BLOG_POST}/${action.payload}`,
        {},
        Types.LIKE_BLOG_POST_REQUEST_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.LIKE_BLOG_POST_REQUEST_SUCCESS) {
    dispatch(userRequest());
    dispatch(initialBlogPostsRequest());
    dispatch(resetSubmitting());
  }

};


const createCommentFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.CREATE_COMMENT_REQUEST) {
    dispatch(
      authApiRequest(
        "POST",
        BLOG_POST_URLS.COMMENT_BLOG_POST.replace('{{blogPostId}}', action.meta.blogPostId),
        action.payload,
        Types.CREATE_COMMENT_REQUEST_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.CREATE_COMMENT_REQUEST_SUCCESS) {
    dispatch(resetSubmitting());
    dispatch(getCommentsRequest());
  }

};


const createNewBlogPostFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.CREATE_BLOG_POST_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        BLOG_POST_URLS.CREATE_BLOG_POST,
        action.payload,
        Types.CREATE_BLOG_POST_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.CREATE_BLOG_POST_SUCCESS) {
    dispatch(resetSubmitting())
  }
};



export const blogPostMiddleware = [
  initialBlogPostsFLow,
  likeBlogPostFlow,
  createCommentFlow,
  createNewBlogPostFlow
]