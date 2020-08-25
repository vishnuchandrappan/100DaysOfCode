import { Types } from "../actions/users";

export function usersReducer(state = [], action) {
  switch (action.type) {
    case Types.UPDATE_USERS:
      return action.payload;

    default:
      return state;
  }
}
