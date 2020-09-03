import { combineReducers } from 'redux';
import { userReducer } from './user';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer
});

export type state = ReturnType<typeof rootReducer>