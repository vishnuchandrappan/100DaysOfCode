import { Types } from '../actions/user';
import { Action } from '../_interfaces';

const userState = {
  name: null,
  email: null
}

export function userReducer(
  state = userState,
  action: Action
) {
  switch (action.type) {
    case Types.USER_REQUEST_SUCCESS:
      return {
        name: action.payload.name,
        email: action.payload.email
      }
    default:
      return state
  }
}