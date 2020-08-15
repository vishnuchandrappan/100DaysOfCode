const entity = "[App]";

export const Types = {
  API_REQUEST: `${entity} API Request`,
};

export const apiRequest = (method, url, body, onSuccess, onError) => ({
  type: Types.API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
});
