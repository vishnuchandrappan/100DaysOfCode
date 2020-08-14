const entity = "CAKE";

export const Types = {
  BUY_CAKE: `[${entity}] BUY_REQUEST`,
};

export const buyCake = (payload = 1) => {
  return {
    type: Types.BUY_CAKE,
    payload,
  };
};

export default Types;
