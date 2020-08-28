import { Types } from "../actions/api";
import { AuthAxios, Axios } from "../../api";
import { store } from "../store";


const getToken = () => store.getState().auth.token;

export const authApi = ({ dispatch }) => (next) => (action) => {
  if (action.type === Types.AUTH_API_REQUEST) {
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
  
  export const api = ({ dispatch }) => (next) => (action) => {
    if (action.type === Types.API_REQUEST) {
      const { method, url, onSuccess, onError } = action.meta;
      Axios({
        method,
        url,
        data: action.payload,
      })
      .then(({ data }) => {
        console.log("Store", getToken());
        dispatch({ type: onSuccess, payload: data });
      })
      .catch((error) => {
        dispatch({ type: onError, payload: error });
      });
  }
  return next(action);
};

export const apiMiddleWare = [authApi, api];
