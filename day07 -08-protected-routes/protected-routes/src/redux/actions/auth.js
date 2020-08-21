const entity = "[Auth]";

export const Types = {
  UPDATE_USER: `${entity} Update`,
  USER_LOGOUT: `${entity} Logout`,
};

export const updateUser = (data) => ({
  type: Types.UPDATE_USER,
  payload: data,
});

export const userLogout = () => ({
  type: Types.USER_LOGOUT,
});
