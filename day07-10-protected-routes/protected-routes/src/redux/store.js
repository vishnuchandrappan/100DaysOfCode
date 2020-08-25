import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducers";
import { authMiddleware } from "./middleware/auth";
import { uiMiddleware } from "./middleware/ui";
import { apiMiddleWare } from "./middleware/api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
    ...authMiddleware,
    ...uiMiddleware,
    ...apiMiddleWare
    )
  )
);
