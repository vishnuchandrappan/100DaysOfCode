import { Types } from '../actions';
import { store } from '../store';
import { User } from '../../utils/interface';

import {
  createUserRequest,
  createUserSuccess,
  createUserError,
} from '../actions'

export const createUserFlow = ({ dispatch }: any) => (next: (action: any) => void) => (action: any) => {
  next(action);

  if (action.type === Types.CREATE_USER_REQUEST) {
    const { email } = action.payload;
    const user: User = store.user;
  }
}