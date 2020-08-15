const entity = "[Order]";

export const CREATE_ORDER = `${entity} Create`;
export const UPDATE_ORDER = `${entity} Update`;
export const SUBMIT_ORDER = `${entity} Complete Order`;

export const createOrder = (bookId) => ({
  type: CREATE_ORDER,
  payload: bookId,
});

export const updateOrder = (details) => ({
  type: UPDATE_ORDER,
  payload: details,
});

export const submitOrder = (email) => ({
  type: SUBMIT_ORDER,
  payload: email,
});
