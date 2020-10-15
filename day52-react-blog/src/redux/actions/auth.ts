import { AxiosResponse } from "axios";
import { Action, LoginResponse, SignupData } from "../_interfaces";
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
  REFRESH_TOKEN_ERROR: `${entity} Refresh Token Error`,
  SIGNUP_REQUEST: `${entity} Signup Request`,
  SIGNUP_SUCCESS: `${entity} Signup Success`
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


export const signupRequest = (data: SignupData) => ({
  type: Types.SIGNUP_REQUEST,
  payload: data
})

