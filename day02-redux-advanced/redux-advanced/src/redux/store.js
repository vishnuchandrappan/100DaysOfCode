import { applyMiddleware, createStore, compose } from "redux";
import { reducers } from "./reducers";
import { api } from "./middleware/api";
import { booksMiddleware } from "./middleware/books";
import { orderMiddleware } from "./middleware/order";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...booksMiddleware, ...orderMiddleware, api))
);
