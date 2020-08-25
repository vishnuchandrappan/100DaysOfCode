const entity = "[Auth]";

export const Types = {
  USER_LOGIN: `${entity} Login`,
  USER_LOGIN_SUCCESS: `${entity} Login Success`,
  USER_LOGIN_ERROR: `${entity} Login Error`,
  UPDATE_USER: `${entity} Update`,
  USER_LOGOUT: `${entity} Logout`,
};

export const userLogin = (data) => ({
  type: Types.USER_LOGIN,
  payload: data,
});

export const userLoginSuccess = () => ({
  type: Types.USER_LOGIN_SUCCESS,
});

export const userLoginError = () => ({
  type: Types.USER_LOGIN_ERROR,
});

export const updateUser = (data) => ({
  type: Types.UPDATE_USER,
  payload: data,
});

export const userLogout = () => ({
  type: Types.USER_LOGOUT,
});
