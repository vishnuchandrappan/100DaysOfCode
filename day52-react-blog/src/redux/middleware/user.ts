import { setSubmitting, authApiRequest, resetSubmitting } from '../actions';
import { Types } from '../actions';
import { Action } from '../_interfaces';
import { USER_URLS } from '../../utils/urls';

const userRequestFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);
  if (action.type === Types.USER_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        USER_URLS.AUTH_USER,
        action.payload,
        Types.USER_REQUEST_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.USER_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  }

};

export const userMiddleware = [
  userRequestFlow,
]