import { combineReducers } from "redux";
import { authReducer } from "./auth.js";
import { uiReducer } from "./ui";
import { usersReducer } from "./users";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  users: usersReducer
});
