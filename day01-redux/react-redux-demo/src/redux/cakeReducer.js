import { Types } from "./cakeActions";

const initialState = {
  numberOfCakes: 100,
};

const cakeReducer = (state = initialState, { type }) => {
  switch (type) {
    case Types.BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
