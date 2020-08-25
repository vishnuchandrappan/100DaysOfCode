import { Types } from "../actions/api";
import { AuthAxios } from "../../api";

export const api = ({ dispatch }) => (next) => (action) => {
  if (action.type === Types.API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;
    AuthAxios({
      method,
      url,
      data: action.payload,
    })
      .then(({ data }) => {
        dispatch({ type: onSuccess, payload: data });
      })
      .catch((error) => {
        dispatch({ type: onError, payload: error });
      });
  }
  return next(action);
};

// export const apiWithToken = ({ dispatch }) => (next) => (action) => {
//   if (action.type === Types.API_REQUEST) {
//     const { method, url, onSuccess, onError } = action.meta;
//   }
//   return next(action);
// };

export const apiMiddleWare = [api];
