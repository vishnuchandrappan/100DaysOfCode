import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  GET_BOOKS,
  SELECT_BOOK,
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

  if (action.type === GET_BOOKS) {
    dispatch(
      apiRequest("GET", URL, null, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR)
    );
    dispatch(showSpinner());
  }
};

export const processBooksCollection = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_BOOKS_SUCCESS) {
    dispatch(updateBooks(action.payload.items));
    dispatch(hideSpinner());
  }
};

export const selectBookFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === SELECT_BOOK) {
    dispatch(orderInProgress());
    dispatch(createOrder(action.payload));
  }
};

export const booksMiddleware = [
  getBooksFlow,
  processBooksCollection,
  selectBookFlow,
];
