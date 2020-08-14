import { Types } from "./iceCreamActions";

const initialState = {
  numberOfIceCreams: 120,
};

const iceCreamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - parseInt(payload),
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
