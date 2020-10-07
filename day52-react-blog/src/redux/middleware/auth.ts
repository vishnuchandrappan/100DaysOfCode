import { apiRequest } from '../actions';
import { Types } from '../actions/auth';
import { Action } from '../_interfaces';
import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types/index';
import { resetSubmitting, setSubmitting } from '../actions/ui';

const LOGIN_URL = "/auth/login";

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

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
    toast.success(action.payload, toastOptions)
  }

};

export const loginErrorFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.LOGIN_ERROR) {
    dispatch(resetSubmitting());
    toast.error(action.payload, toastOptions)
  }

};


export const authMiddleware = [
  loginFlow,
  loginSuccessFlow,
  loginErrorFlow
]