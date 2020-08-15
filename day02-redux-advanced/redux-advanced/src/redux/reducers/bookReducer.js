import { Types } from "../actions/books";

export function booksReducer(state = [], action) {
  switch (action.type) {
    case Types.UPDATE_BOOKS:
      return action.payload;

    default:
      return state;
  }
}
