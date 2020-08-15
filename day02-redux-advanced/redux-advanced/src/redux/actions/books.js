const entity = "[Books]";

export const GET_BOOKS = `${entity} Request`;
export const FETCH_BOOKS_SUCCESS = `${entity} Request Success`;
export const FETCH_BOOKS_ERROR = `${entity} Request Error`;
export const UPDATE_BOOKS = `${entity} Update`;
export const SELECT_BOOK = `${entity} Select`;

export const getBooks = () => ({
  type: GET_BOOKS,
});

export const updateBooks = (data) => ({
  type: UPDATE_BOOKS,
  payload: data,
});

export const selectBook = (bookId) => ({
  type: SELECT_BOOK,
  payload: bookId,
});
