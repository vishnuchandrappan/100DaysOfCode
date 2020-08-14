import { Types } from "./cakeActions";

const initialState = {
  numberOfCakes: 100,
};

const cakeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - parseInt(payload),
      };

    default:
      return state;
  }
};

export default cakeReducer;
