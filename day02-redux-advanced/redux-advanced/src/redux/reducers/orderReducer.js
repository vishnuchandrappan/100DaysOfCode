import { Types } from "../actions/order";

const initialState = {
  date: null,
  bookId: null,
  email: "",
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_ORDER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
