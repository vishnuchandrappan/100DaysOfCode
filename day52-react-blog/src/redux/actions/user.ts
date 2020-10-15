import { Action } from "../_interfaces";


const entity = "[UI]";

export const Types = {
  USER_REQUEST: `${entity} Request`,
  USER_REQUEST_SUCCESS: `${entity} Request Success`,
  USER_REQUEST_ERROR: `${entity} Request Error`
}

export const userRequest = (): Action => ({
  type: Types.USER_REQUEST
});
