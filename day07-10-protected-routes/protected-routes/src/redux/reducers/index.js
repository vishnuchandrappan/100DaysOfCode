import { combineReducers } from "redux";
import { authReducer } from "./auth.js";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});
