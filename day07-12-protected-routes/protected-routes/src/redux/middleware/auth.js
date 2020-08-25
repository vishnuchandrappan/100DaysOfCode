import { Types } from "../actions";
import {
  setSubmitting,
  resetSubmitting,
  updateUser,
  authApiRequest,
} from "../actions";


export const userLoginFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.USER_LOGIN) {
    dispatch(
      authApiRequest(
        "POST",
        "/login",
        action.payload,
        Types.USER_LOGIN_SUCCESS,
        Types.USER_LOGIN_ERROR
      )
    );
    dispatch(setSubmitting());
  }
};

export const userUpdateFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.USER_LOGIN_SUCCESS) {
    dispatch(updateUser(action.payload));
    dispatch(resetSubmitting());
  }
};

export const authMiddleware = [userLoginFlow, userUpdateFlow];
