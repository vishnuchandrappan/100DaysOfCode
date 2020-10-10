import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { uiMiddleware } from './middleware/ui';
import { apiMiddleWare } from "./middleware/api";
import { authMiddleware } from "./middleware/auth";
import { userMiddleware } from "./middleware/user";
import { blogPostMiddleware } from "./middleware/blog_post";
import { persistStore } from 'redux-persist'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      ...uiMiddleware,
      ...apiMiddleWare,
      ...authMiddleware,
      ...userMiddleware,
      ...blogPostMiddleware
    )
  )
);

export const persistor = persistStore(store);
export default store;
