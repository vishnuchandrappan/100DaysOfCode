import { Types } from '../actions/tags';
import { Action } from '../_interfaces';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tagsState = {
  tags: []
};

function baseReducer(
  state = tagsState,
  action: Action
) {
  switch (action.type) {
    case Types.GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload
      };

    default:
      return state;
  }
}

export const tagsReducer = persistReducer(
  {
    storage,
    key: "tags",
    whitelist: [""]
  },
  baseReducer
);