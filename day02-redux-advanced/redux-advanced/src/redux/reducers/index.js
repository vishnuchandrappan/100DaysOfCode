import { combineReducers } from "redux";
import { booksReducer } from "./bookReducer";
import { uiReducer } from "./uiReducer";
import { orderReducer } from "./orderReducer";

export const reducers = combineReducers({
  ui: uiReducer,
  books: booksReducer,
  order: orderReducer,
});
