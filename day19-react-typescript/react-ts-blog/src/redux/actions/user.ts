import { User } from "../../utils";

const entity = "[User]";

export const Types = {
  CREATE_USER_REQUEST: `${entity} Create Request`,
  CREATE_USER_SUCCESS: `${entity} Create Success`,
  CREATE_USER_ERROR: `${entity} Create Error`,
  CREATE_USER: `${entity} Create User`,
  UPDATE_USER: `${entity} Update`,
  DELETE_USER: `${entity} Delete`,
}

export const createUserRequest = (user: User) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: { id: Date.now(), ...user },
})

export const createUserSuccess = (user: User) => ({
  type: Types.CREATE_USER_SUCCESS,
  payload: user
})

export const createUserError = () => ({
  type: Types.CREATE_USER_ERROR
})

export const createUser = (user: User) => ({
  type: Types.CREATE_USER,
  payload: user
})

export const updateUser = (user: User) => ({
  type: Types.UPDATE_USER,
  payload: user,
  meta: {
    user_id: user.id
  }
})

export const deleteUser = (user_id: number) => ({
  type: Types.DELETE_USER,
  payload: user_id
})
