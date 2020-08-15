const entity = "[Order]";

export const Types = {
  CREATE_ORDER: `${entity} Create`,
  UPDATE_ORDER: `${entity} Update`,
  SUBMIT_ORDER: `${entity} Complete Order`,
};

export const createOrder = (bookId) => ({
  type: Types.CREATE_ORDER,
  payload: bookId,
});

export const updateOrder = (details) => ({
  type: Types.UPDATE_ORDER,
  payload: details,
});

export const submitOrder = (email) => ({
  type: Types.SUBMIT_ORDER,
  payload: email,
});
