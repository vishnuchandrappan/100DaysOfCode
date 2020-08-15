import { Types } from "../actions";
import {
  updateBooks,
  showSpinner,
  hideSpinner,
  orderInProgress,
  createOrder,
  apiRequest,
} from "../actions";

const URL = "https://www.googleapis.com/books/v1/volumes?q=react";

export const getBooksFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.GET_BOOKS) {
    dispatch(
      apiRequest(
        "GET",
        URL,
        null,
        Types.FETCH_BOOKS_SUCCESS,
        Types.FETCH_BOOKS_ERROR
      )
    );
    dispatch(showSpinner());
  }
};

export const processBooksCollection = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.FETCH_BOOKS_SUCCESS) {
    dispatch(updateBooks(action.payload.items));
    dispatch(hideSpinner());
  }
};

export const selectBookFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.SELECT_BOOK) {
    dispatch(orderInProgress());
    dispatch(createOrder(action.payload));
  }
};

export const booksMiddleware = [
  getBooksFlow,
  processBooksCollection,
  selectBookFlow,
];
