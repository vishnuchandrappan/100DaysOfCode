import { combineReducers } from "redux";
import { authReducer } from "./auth.js";

export const rootReducer = combineReducers({
  auth: authReducer,
});
