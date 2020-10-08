import { setSubmitting, authApiRequest, resetSubmitting, showDangerToast } from '../actions';
import { Types } from '../actions';
import { Action } from '../_interfaces';

const USER_URL = '/auth/me';

export const userRequestFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.USER_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        USER_URL,
        action.payload,
        Types.USER_REQUEST_SUCCESS,
        Types.USER_REQUEST_ERROR
      )
    );
    dispatch(setSubmitting());
  }

};

export const userRequestSuccessFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.USER_REQUEST_SUCCESS) {
    dispatch(resetSubmitting())
  }

};

export const userResponseErrorFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.USER_REQUEST_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }

};

export const userMiddleware = [
  userRequestFlow,
  userRequestSuccessFlow,
  userResponseErrorFlow
]