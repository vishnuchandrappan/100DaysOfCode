const entity = "[UI]";

export const Types = {
  SHOW_SPINNER: `${entity} show spinner`,
  HIDE_SPINNER: `${entity} hide spinner`,
  ORDER_IN_PROGRESS: `${entity} Order in progress`,
  ORDER_COMPLETE: `${entity} Order complete`,
};

export const showSpinner = () => ({
  type: Types.SHOW_SPINNER,
});

export const hideSpinner = () => ({
  type: Types.HIDE_SPINNER,
});

export const orderInProgress = () => ({
  type: Types.ORDER_IN_PROGRESS,
});

export const orderComplete = () => ({
  type: Types.ORDER_COMPLETE,
});
