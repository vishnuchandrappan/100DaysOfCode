import { Types } from "../actions/api";
export const api = ({ dispatch }) => (next) => (action) => {
  if (action.type === Types.API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;

    fetch(url, { method })
      .then((response) => response.json())
      .then((data) => dispatch({ type: onSuccess, payload: data }))
      .catch((error) => dispatch({ type: onError, payload: error }));
  }
  return next(action);
};
