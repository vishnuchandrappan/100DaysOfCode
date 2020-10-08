import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { UiReducer } from './ui';
import { userReducer } from './user';
import { blogPostReducer } from './blog_post';

export const reducers = combineReducers({
  auth: authReducer,
  ui: UiReducer,
  user: userReducer,
  blogPosts: blogPostReducer
});
