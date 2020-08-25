const entity = "[Users]";

export const Types = {
  USERS_REQUEST: `${entity} FETCH REQUEST`,
  USERS_REQUEST_SUCCESS: `${entity} FETCH SUCCESS`,
  USERS_REQUEST_ERROR: `${entity} FETCH ERROR`,
  UPDATE_USERS: `${entity} UPDATE USERS`,
};

export const usersRequest = () => ({
  type: Types.USERS_REQUEST,
});

export const usersRequestSuccess = () => ({
  type: Types.USERS_REQUEST_SUCCESS,
});

export const usersRequestError = () => ({
  type: Types.USERS_REQUEST_ERROR,
});

export const updateUsers = (data) => ({
  type: Types.UPDATE_USERS,
  payload: data,
});
