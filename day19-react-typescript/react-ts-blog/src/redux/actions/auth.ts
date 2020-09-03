import { Auth } from '../../utils';

const entity = "[Auth]";

export const Types = {
  USER_LOGIN: `${entity} User Login Request`,
  USER_LOGIN_SUCCESS: `${entity} User Login Success`,
  USER_LOGIN_ERROR: `${entity} User Login Error`,
  AUTHENTICATE_USER: `${entity} Authenticate User`,
  USER_LOGOUT: `${entity} User Logout`,
}

export const userLogin = (email: string, password: string) => {
  return {
    type: Types.USER_LOGIN,
    payload: {
      email,
      password
    }
  }
}

export const userLoginSuccess = () => {
  return {
    type: Types.USER_LOGIN_SUCCESS
  }
}

export const userLoginError = () => {
  return {
    type: Types.USER_LOGIN_ERROR
  }
}

export const authenticateUser = (token: string) => {
  return {
    type: Types.AUTHENTICATE_USER,
    payload: token
  }
}

export const userLogout = () => {
  return {
    type: Types.USER_LOGOUT
  }
}