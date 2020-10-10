import { Types } from "../actions/auth";
import { Action, AuthState } from "../_interfaces";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';


const authState: AuthState = {
  token: '',
  isAuthenticated: false,
  expiresAt: null
}

export const authReducer = persistReducer(
  {
    storage,
    key: "auth",
    whitelist: ["token", "isAuthenticated", "expiresAt"]
  },
  (
    state: AuthState = authState,
    action: Action
  ) => {
    switch (action.type) {

      case Types.LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload.access_token,
          isAuthenticated: true,
          expiresAt: action.payload.expires_in
        }

      case Types.LOGOUT_SUCCESS:
        Object.keys(state).forEach(key => {
          storage.removeItem(`persist:${key}`);
          localStorage.clear();
        });
        return authState

      default:
        return state;
    }
  }
);

