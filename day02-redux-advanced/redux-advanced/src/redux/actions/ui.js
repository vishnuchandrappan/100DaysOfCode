const entity = "[UI]";

export const SHOW_SPINNER = `${entity} show spinner`;
export const HIDE_SPINNER = `${entity} hide spinner`;
export const ORDER_IN_PROGRESS = `${entity} Order in progress`;
export const ORDER_COMPLETE = `${entity} Order complete`;

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER,
});

export const orderInProgress = () => ({
  type: ORDER_IN_PROGRESS,
});

export const orderComplete = () => ({
  type: ORDER_COMPLETE,
});
