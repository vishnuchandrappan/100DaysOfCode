import { Types } from "../actions/ui";

const initialState = {
  isLoading: false,
  isSubmitting: false,
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case Types.UPDATE_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };

    default:
      return state;
  }
}
