import { Types } from '../actions/user';
import { Action } from '../_interfaces';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userState = {
  id: null,
  name: null,
  email: null,
  liked_posts: [],
  liked_comments: []
}

function baseReducer(
  state = userState,
  action: Action
) {
  switch (action.type) {
    case Types.USER_REQUEST_SUCCESS:
      return {
        name: action.payload[0].name,
        email: action.payload[0].email,
        id: action.payload[0].id,
        liked_posts: action.payload[0].liked_posts,
        liked_comments: action.payload[0].liked_comments
      }
    default:
      return state
  }
}

export const userReducer = persistReducer(
  {
    storage,
    key: "user",
    whitelist: ["name", "email", "id", "liked_posts", "liked_comments"]
  },
  baseReducer
)

export default userReducer;