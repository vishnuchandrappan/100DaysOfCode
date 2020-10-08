import { Action, LoginResponse } from "../_interfaces";
import { AxiosResponse } from 'axios';
import { LoginCredentials } from '../_interfaces/index';

const entity = "[Auth]";

export const Types = {
  LOGIN_REQUEST: `${entity} Login Request`,
  LOGIN_SUCCESS: `${entity} Login Success`,
  LOGIN_ERROR: `${entity} Login Error`,
  LOGOUT_REQUEST: `${entity} Logout Request`,
  LOGOUT_SUCCESS: `${entity} Logout Success`,
  LOGOUT_ERROR: `${entity} Logout Error`,
  REFRESH_TOKEN_REQUEST: `${entity} Refresh Token Request`,
  REFRESH_TOKEN_SUCCESS: `${entity} Refresh Token Success`,
  REFRESH_TOKEN_ERROR: `${entity} Refresh Token Error`
};


export const loginRequest = (data: LoginCredentials) => ({
  type: Types.LOGIN_REQUEST,
  payload: data
})

export const loginSuccess = (
  loginResponse: AxiosResponse<LoginResponse>
): Action => ({
  type: Types.LOGIN_SUCCESS,
  payload: loginResponse
});

export const logoutRequest = () => ({
  type: Types.LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: Types.LOGIN_SUCCESS
})