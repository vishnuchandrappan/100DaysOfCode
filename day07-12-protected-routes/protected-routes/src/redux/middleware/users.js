import { Types, updateUsers } from "../actions/users";
import { apiRequest, setLoading, resetLoading } from "../actions";

export const fetchUsersFlow = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.USERS_REQUEST) {
    dispatch(
      apiRequest(
        "GET",
        "/users",
        {},
        Types.USERS_REQUEST_SUCCESS,
        Types.USERS_REQUEST_ERROR
      )
    );
    dispatch(setLoading());
  }
};

export const updateUsersFlow = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === Types.USERS_REQUEST_SUCCESS) {
    dispatch(updateUsers(action.payload));
    dispatch(resetLoading());
  }
};

export const usersMiddleware = [fetchUsersFlow, updateUsersFlow];
