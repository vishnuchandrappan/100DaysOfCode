import { getBlogPostId } from '../../utils/store';
import { GET_COMMENTS, LIKE_COMMENT } from '../../utils/urls';
import { Types, authApiRequest, resetSubmitting, setSubmitting, showDangerToast, userRequest, getCommentsRequest } from '../actions';
import { Action } from '../_interfaces';

export const createCommentsFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);


  if (action.type === Types.GET_COMMENTS_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        GET_COMMENTS.replace('{{blogPostId}}', getBlogPostId()),
        {},
        Types.GET_COMMENTS_REQUEST_SUCCESS,
        Types.GET_COMMENTS_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.GET_COMMENTS_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  } else if (action.type === Types.GET_COMMENTS_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};

export const likeCommentFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);


  if (action.type === Types.LIKE_COMMENT) {
    dispatch(
      authApiRequest(
        "POST",
        `${LIKE_COMMENT}/${action.payload}`,
        {},
        Types.LIKE_COMMENT_SUCCESS,
        Types.LIKE_COMMENT_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.LIKE_COMMENT_SUCCESS) {
    dispatch(userRequest());
    dispatch(getCommentsRequest());
    dispatch(resetSubmitting())
  } else if (action.type === Types.LIKE_COMMENT_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};

export const commentsMiddleware = [
  createCommentsFlow,
  likeCommentFlow
]