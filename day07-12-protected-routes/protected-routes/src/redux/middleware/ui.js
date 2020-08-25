import { Types } from "../actions";
import { updateSubmitting, updateLoading } from "../actions/ui";
export const setSubmittingFlow = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === Types.SET_SUBMITTING) {
    dispatch(updateSubmitting(true));
  }
};

export const resetSubmittingFlow = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === Types.RESET_SUBMITTING) {
    dispatch(updateSubmitting(false));
  }
};

export const setLoadingFlow = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === Types.SET_LOADING) {
    dispatch(updateLoading(true));
  }
};

export const resetLoadingFlow = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === Types.RESET_LOADING) {
    dispatch(updateLoading(false));
  }
};

export const uiMiddleware = [
  setSubmittingFlow,
  resetSubmittingFlow,
  setLoadingFlow,
  resetLoadingFlow,
];
