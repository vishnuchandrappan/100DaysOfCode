import { loginSuccess, Types } from '../actions/auth';
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
const SIGNUP_URL = "/users";

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
  } else if (action.type === Types.LOGIN_SUCCESS) {
    dispatch(resetSubmitting())
    dispatch(userRequest())
    dispatch(showSuccessToast("Logged in Successfully"));
  } else if (action.type === Types.LOGIN_ERROR) {
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
  } else if (action.type === Types.LOGOUT_SUCCESS) {
    dispatch(resetSubmitting());
    dispatch(showSuccessToast(action.payload));
  } else if (action.type === Types.LOGIN_ERROR) {
    dispatch(resetSubmitting());
  }

};


export const signupFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.SIGNUP_REQUEST) {
    dispatch(
      apiRequest(
        "POST",
        SIGNUP_URL,
        action.payload,
        Types.SIGNUP_SUCCESS,
        Types.LOGIN_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.SIGNUP_SUCCESS) {
    dispatch(resetSubmitting())
    dispatch(loginSuccess(action.payload));
    dispatch(showSuccessToast("Account created successfully"));
  } else if (action.type === Types.LOGIN_ERROR) {
    dispatch(resetSubmitting());
    dispatch(showDangerToast(action.payload));
  }

};


export const authMiddleware = [
  loginFlow,
  logoutFlow,
  signupFlow
]