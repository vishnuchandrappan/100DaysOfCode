const entity = "[Api]";

export const Types = {
  API_REQUEST: `${entity} API Request`,
  API_REQUEST_WITH_TOKEN: `${entity} API Request With Token`,
};

export const apiRequest = (method, url, body, onSuccess, onError) => ({
  type: Types.API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
});

export const apiRequestWithToken = (method, url, body, onSuccess, onError) => ({
  type: Types.API_REQUEST_WITH_TOKEN,
  payload: body,
  meta: { method, url, onSuccess, onError },
});
