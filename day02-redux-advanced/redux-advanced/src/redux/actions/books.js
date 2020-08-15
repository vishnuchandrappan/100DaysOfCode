const entity = "[Books]";

export const Types = {
  GET_BOOKS: `${entity} Request`,
  FETCH_BOOKS_SUCCESS: `${entity} Request Success`,
  FETCH_BOOKS_ERROR: `${entity} Request Error`,
  UPDATE_BOOKS: `${entity} Update`,
  SELECT_BOOK: `${entity} Select`,
};

export const getBooks = () => ({
  type: Types.GET_BOOKS,
});

export const updateBooks = (data) => ({
  type: Types.UPDATE_BOOKS,
  payload: data,
});

export const selectBook = (bookId) => ({
  type: Types.SELECT_BOOK,
  payload: bookId,
});