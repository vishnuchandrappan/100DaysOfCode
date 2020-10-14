import { getBlogPostId } from '../../utils/store';
import { Types, authApiRequest, resetSubmitting, setSubmitting, showDangerToast } from '../actions';
import { Action } from '../_interfaces';

const GET_COMMENTS_URL = "/blog_posts/{{blogPostId}}/comments";

export const createCommentsFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);


  if (action.type === Types.GET_COMMENTS_REQUEST) {
    console.log("---<",getBlogPostId());
    dispatch(
      authApiRequest(
        "GET",
        GET_COMMENTS_URL.replace('{{blogPostId}}', getBlogPostId()),
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

export const commentsMiddleware = [
  createCommentsFlow,
]