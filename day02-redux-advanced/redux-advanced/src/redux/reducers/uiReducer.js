import { Types} from "../actions/ui";

const initialState = {
  isLoading: false,
  orderInProcess: false,
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW_SPINNER:
      return {
        ...state,
        isLoading: true,
      };

    case Types.HIDE_SPINNER:
      return {
        ...state,
        isLoading: false,
      };

    case Types.ORDER_IN_PROGRESS:
      return {
        ...state,
        orderInProcess: true,
      };

    case Types.ORDER_COMPLETE:
      return {
        ...state,
        orderInProcess: false,
      };

    default:
      return state;
  }
}
