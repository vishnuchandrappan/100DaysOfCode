const entity = "ICE CREAM";

export const Types = {
  BUY_ICE_CREAM: `[${entity}] BUY_REQUEST`,
};

export const buyIceCream = (payload = 1) => {
  return {
    type: Types.BUY_ICE_CREAM,
    payload,
  };
};

export default Types;
