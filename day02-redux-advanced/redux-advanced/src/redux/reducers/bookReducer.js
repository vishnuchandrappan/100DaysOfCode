import { UPDATE_BOOKS } from "../actions/books";

export function booksReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_BOOKS:
      return action.payload;

    default:
      return state;
  }
}
