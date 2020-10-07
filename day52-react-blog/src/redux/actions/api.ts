const entity = "[API]";

export const Types = {
  API_REQUEST: `${entity} Request`,
  AUTH_API_REQUEST: `${entity} Authenticated Request`
};

export const apiRequest = (
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  body: any,
  onSuccess: string,
  onError: string
) => ({
  type: Types.API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
});

export const authApiRequest = (
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  body: any,
  onSuccess: string,
  onError: string
) => ({
  type: Types.API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
});
