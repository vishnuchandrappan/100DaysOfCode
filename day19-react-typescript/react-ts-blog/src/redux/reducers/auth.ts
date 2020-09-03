import { Auth } from "../../utils";
import { Types } from '../actions/auth';

interface Action {
  type: string,
  payload: string,
  meta?: any
}

const initialState: Auth = {
  isAuthenticated: false,
  token: ""
}

export function authReducer(state: Auth = initialState, action: Action) {
  switch (action.type) {
    case Types.AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload
      }

    case Types.USER_LOGOUT:
      return initialState

    default:
      return state;
  }
}