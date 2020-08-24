import { Types } from "../actions";
import {
  setSubmitting,
  resetSubmitting,
  updateUser,
  apiRequest,
} from "../actions";

const URL = "https://www.googleapis.com/books/v1/volumes?q=react";

export const userLoginFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.USER_LOGIN) {
    dispatch(
      apiRequest(
        "POST",
        URL,
        action.payload.values,
        Types.updateUser,
        Types.userLoginError
      )
    );
    dispatch(setSubmitting());
  }
};

export const