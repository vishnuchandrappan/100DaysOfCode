import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { UiReducer } from './ui';
import { userReducer } from './user';
import { blogPostReducer } from './blog_post';
import { Action } from "../_interfaces";


export const appReducer = combineReducers({
  auth: authReducer,
  ui: UiReducer,
  user: userReducer,
  blogPosts: blogPostReducer
});

export const reducers = (state: any, action: Action) => {
  return appReducer(state, action);
};

export default reducers;
