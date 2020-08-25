import { Types } from "../actions";
import { updateSubmitting } from "../actions/ui";
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

export const uiMiddleware = [setSubmittingFlow, resetSubmittingFlow];
