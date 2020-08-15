import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  ORDER_COMPLETE,
  ORDER_IN_PROGRESS,
} from "../actions/ui";

const initialState = {
  isLoading: false,
  orderInProcess: false,
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isLoading: true,
      };

    case HIDE_SPINNER:
      return {
        ...state,
        isLoading: false,
      };

    case ORDER_IN_PROGRESS:
      return {
        ...state,
        orderInProcess: true,
      };

    case ORDER_COMPLETE:
      return {
        ...state,
        orderInProcess: false,
      };

    default:
      return state;
  }
}
