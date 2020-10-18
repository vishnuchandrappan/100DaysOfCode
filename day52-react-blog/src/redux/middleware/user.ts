import { setSubmitting, authApiRequest, resetSubmitting, showDangerToast } from '../actions';
import { Types } from '../actions';
import { Action } from '../_interfaces';
import { AUTH_USER } from '../../utils/urls';

export const userRequestFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);
  if (action.type === Types.USER_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        AUTH_USER,
        action.payload,
        Types.USER_REQUEST_SUCCESS,
        Types.USER_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.USER_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  } else if (action.type === Types.USER_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};

export const userMiddleware = [
  userRequestFlow,
]