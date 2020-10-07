import { Types } from "../actions/auth";
import { Action, AuthState } from "../_interfaces";

const authState: AuthState = {
  token: '',
  isAuthenticated: false,
  expiresAt: Date.now()
}

export function authReducer(
  state = authState,
  action: Action
) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.access_token,
        isAuthenticated: true,
        expiresAt: action.payload.expires_in
      }

    case Types.LOGOUT_SUCCESS:
      return authState

    default:
      return state;
  }
}
