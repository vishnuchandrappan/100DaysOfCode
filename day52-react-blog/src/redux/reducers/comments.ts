import { Action } from "../_interfaces";
import { Types } from '../actions/comments';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const commentsState = {
  comments: []
}

function baseReducer(
  state = commentsState,
  action: Action
) {
  switch (action.type) {

    case Types.GET_COMMENTS_REQUEST_SUCCESS:
      return {
        ...commentsState,
        comments: action.payload
      }

    case Types.CLEAR_COMMENTS:
      return commentsState;

    default:
      return state;

  }
}

export const commentsReducer = persistReducer(
  {
    storage,
    key: 'comments',
    whitelist: ["comments"]
  },
  baseReducer
);

export default commentsReducer;