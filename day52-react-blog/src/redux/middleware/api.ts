import { Types } from '../actions/api'
import { Api } from '../../utils/api';
import { getToken } from '../../utils/store';

export const apiRequestFlow = ({ dispatch }: any) => (next: any) => (action: any) => {
  if (action.type === Types.API_REQUEST) {

    const { method, url, onSuccess, onError } = action.meta;

    Api({
      method,
      url,
      data: action.payload,
    })
      .then((data) => {
        dispatch({ type: onSuccess, payload: data });
      })
      .catch((error) => {
        dispatch({ type: onError, payload: error });
      });
  }

  return next(action);
};

export const authApiRequestFlow = ({ dispatch }: any) => (next: any) => (action: any) => {
  if (action.type === Types.AUTH_API_REQUEST) {

    const { method, url, onSuccess, onError } = action.meta;

    Api.defaults.headers.common['Authorization'] = getToken();

    Api({
      method,
      url,
      data: action.payload,
    })
      .then((data) => {
        dispatch({ type: onSuccess, payload: data });
      })
      .catch((error) => {
        dispatch({ type: onError, payload: error });
      });
  }

  return next(action);
};

export const apiMiddleWare = [apiRequestFlow, authApiRequestFlow];
