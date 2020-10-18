import { getBlogPostId } from '../../utils/store';
import { COMMENT_URLS } from '../../utils/urls';
import { Action } from '../_interfaces';
import {
  Types,
  authApiRequest,
  resetSubmitting,
  setSubmitting,
  userRequest,
  getCommentsRequest
} from '../actions';

const createCommentsFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.GET_COMMENTS_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        COMMENT_URLS.GET_COMMENTS.replace('{{blogPostId}}', getBlogPostId()),
        {},
        Types.GET_COMMENTS_REQUEST_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.GET_COMMENTS_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  }

};

const likeCommentFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LIKE_COMMENT) {
    dispatch(
      authApiRequest(
        "POST",
        `${COMMENT_URLS.LIKE_COMMENT}/${action.payload}`,
        {},
        Types.LIKE_COMMENT_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.LIKE_COMMENT_SUCCESS) {
    dispatch(userRequest());
    dispatch(getCommentsRequest());
    dispatch(resetSubmitting())
  }

};

export const commentsMiddleware = [
  createCommentsFlow,
  likeCommentFlow
]