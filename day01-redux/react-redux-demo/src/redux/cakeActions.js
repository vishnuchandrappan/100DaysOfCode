const entity = "CAKE";

export const Types = {
  BUY_CAKE: `[${entity}] BUY_REQUEST`,
}

export const buyCake = () => {
  return {
    type: Types.BUY_CAKE
  }
}