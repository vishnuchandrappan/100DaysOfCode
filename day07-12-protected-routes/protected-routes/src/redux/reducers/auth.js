import { Types } from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };

    case Types.USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
}
