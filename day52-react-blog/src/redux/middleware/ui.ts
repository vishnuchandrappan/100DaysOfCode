import { resetSubmitting, showDangerToast, Types, updateSubmitting } from '../actions/ui'
import { Action } from '../_interfaces';
import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types/index';
import { transformErrors } from '../../utils/ui';
import { clearComments } from '../actions';

const toastOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const submittingFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.SET_SUBMITTING) {
    dispatch(updateSubmitting(true));
  } else if (action.type === Types.RESET_SUBMITTING) {
    dispatch(updateSubmitting(false));
  } else if (action.type === Types.SET_ERROR) {
    dispatch(resetSubmitting())
    dispatch(showDangerToast(action.payload));
  }
};

const showToastFlow = () => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.SHOW_SUCCESS_TOAST) {
    toast.success(action.payload, toastOptions);
  } else if (action.type === Types.SHOW_DANGER_TOAST) {
    transformErrors(action.payload)
      .forEach((error: string) => {
        toast.error(error, { ...toastOptions, autoClose: false });
      });
  } else if (action.type === Types.SHOW_INFO_TOAST) {
    toast.info(action.payload, toastOptions);
  } else if (action.type === Types.SHOW_WARNING_TOAST) {
    toast.warning(action.payload, toastOptions);
  } else if (action.type === Types.SHOW_TOAST) {
    toast(action.payload, toastOptions);
  }

};

const commentBarFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.HIDE_COMMENT_BAR) {
    dispatch(clearComments());
  }

};


export const uiMiddleware = [
  submittingFlow,
  showToastFlow,
  commentBarFlow
]