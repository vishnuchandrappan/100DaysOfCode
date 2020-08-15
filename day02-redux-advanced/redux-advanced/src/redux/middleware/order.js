import { Types, updateOrder } from "../actions/order";
import { orderComplete } from "../actions/ui";

export const bookOrder = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.CREATE_ORDER) {
    dispatch(updateOrder({ date: new Date(), bookId: action.payload }));
  }
};

export const completeOrder = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === Types.SUBMIT_ORDER) {
    dispatch(updateOrder({ email: action.payload }));
    dispatch(orderComplete());
  }
};

export const orderMiddleware = [bookOrder, completeOrder];
