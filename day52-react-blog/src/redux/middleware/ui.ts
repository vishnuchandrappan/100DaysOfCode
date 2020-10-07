import { Types, updateSubmitting } from '../actions/ui'
import { Action } from '../_interfaces';

export const setSubmittingFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.SET_SUBMITTING) {
    dispatch(updateSubmitting(true));
  }
};

export const resetSubmittingFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.RESET_SUBMITTING) {
    dispatch(updateSubmitting(false));
  }
};

export const uiMiddleware = [
  setSubmittingFlow,
  resetSubmittingFlow
]