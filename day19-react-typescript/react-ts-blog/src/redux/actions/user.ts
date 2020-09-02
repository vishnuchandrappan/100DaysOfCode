import { User } from "../../utils";

const entity = "[User]";

export const Types = {
  CREATE_USER: `${entity} Create`,
  UPDATE_USER: `${entity} Update`,
  DELETE_USER: `${entity} Delete`,
}

export const createUser = (user: User) => ({
  type: Types.CREATE_USER,
  payload: { id: Date.now(), ...user },
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

