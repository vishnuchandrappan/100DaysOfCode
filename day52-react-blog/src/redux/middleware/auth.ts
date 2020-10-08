import { Types, logoutSuccess } from '../actions/auth';
import { Action } from '../_interfaces';
import {
  apiRequest,
  userRequest,
  resetSubmitting,
  setSubmitting,
  showDangerToast,
  showSuccessToast
} from '../actions';

const LOGIN_URL = "/auth/login";
const LOGOUT_URL = "/auth/logout";


export const loginFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGIN_REQUEST) {
    dispatch(
      apiRequest(
        "POST",
        LOGIN_URL,
        action.payload,
        Types.LOGIN_SUCCESS,
        Types.LOGIN_ERROR
      )
    );
    dispatch(setSubmitting());
  }

};

export const loginSuccessFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGIN_SUCCESS) {
    dispatch(resetSubmitting())
    dispatch(userRequest())
    dispatch(showSuccessToast("Logged in Successfully"));
  }

};

export const loginErrorFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGIN_ERROR) {
    dispatch(resetSubmitting());
    dispatch(showDangerToast(action.payload));
  }

};

export const logoutFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGOUT_REQUEST) {
    dispatch(
      apiRequest(
        "POST",
        LOGOUT_URL,
        action.payload,
        Types.LOGOUT_SUCCESS,
        Types.LOGOUT_ERROR
      )
    );
    dispatch(setSubmitting());
  }

  if (action.type === Types.LOGOUT_SUCCESS) {
    dispatch(resetSubmitting());
    dispatch(showSuccessToast(action.payload));
  }

  if (action.type === Types.LOGOUT_SUCCESS) {
    dispatch(resetSubmitting());
    dispatch(logoutSuccess());
  }

};


export const authMiddleware = [
  loginFlow,
  loginSuccessFlow,
  loginErrorFlow,
  logoutFlow
]