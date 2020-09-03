import { Types as UserTypes } from './user';
import { Types as AuthTypes } from './auth';

export const Types = {
  ...UserTypes,
  ...AuthTypes
}

export {
  createUserRequest,
  createUserSuccess,
  createUserError,
  createUser,
  updateUser,
  deleteUser
} from './user';

export {
  userLogin,
  userLoginSuccess,
  userLoginError,
  userLogout,
  authenticateUser
} from './auth';
