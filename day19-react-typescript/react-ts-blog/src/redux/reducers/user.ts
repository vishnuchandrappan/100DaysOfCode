import { User } from "../../utils";
import { Types } from '../actions/user';

interface Action {
  type: string,
  payload: User | number,
  meta?: any
}

const initialState = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password'
  }
]

export function userReducer(state: User[] = initialState, action: Action) {
  switch (action.type) {
    case Types.CREATE_USER:
      return [
        ...state,
        action.payload as User
      ]

    case Types.UPDATE_USER:
      return state.map(user => {
        if (user.id === action.meta.user_id) {
          return { ...action.payload as User }
        }
        return user;
      });

    case Types.DELETE_USER:
      return [
        state.filter(user => user.id !== action.payload)
      ];

    default:
      return state;
  }
}