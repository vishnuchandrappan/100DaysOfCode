import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { UiReducer } from './ui';

export const reducers = combineReducers({
  auth: authReducer,
  ui: UiReducer
});
