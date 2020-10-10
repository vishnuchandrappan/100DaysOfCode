import { Types } from '../actions/user';
import { Action } from '../_interfaces';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userState = {
  id: null,
  name: null,
  email: null
}

export function baseReducer(
  state = userState,
  action: Action
) {
  switch (action.type) {
    case Types.USER_REQUEST_SUCCESS:
      return {
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      }
    default:
      return state
  }
}

export const userReducer = persistReducer(
  {
    storage,
    key: "user",
    whitelist: ["name", "email", "id"]
  },
  baseReducer
)

export default userReducer;