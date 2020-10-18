import { loginSuccess } from '../actions/auth';
import { Action } from '../_interfaces';
import { AUTH_URLS } from '../../utils/urls';
import {
  apiRequest,
  userRequest,
  resetSubmitting,
  setSubmitting,
  showSuccessToast,
  Types
} from '../actions';


const loginFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGIN_REQUEST) {
    dispatch(
      apiRequest(
        "POST",
        AUTH_URLS.LOGIN,
        action.payload,
        Types.LOGIN_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.LOGIN_SUCCESS) {
    dispatch(resetSubmitting())
    dispatch(userRequest())
    dispatch(showSuccessToast("Logged in Successfully"));
  }

};


const logoutFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGOUT_REQUEST) {
    dispatch(
      apiRequest(
        "POST",
        AUTH_URLS.LOGOUT,
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


const signupFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.SIGNUP_REQUEST) {
    dispatch(
      apiRequest(
        "POST",
        AUTH_URLS.SIGNUP,
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
  }

};


export const authMiddleware = [
  loginFlow,
  logoutFlow,
  signupFlow
]