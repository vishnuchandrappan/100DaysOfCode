const redux = require('redux');
const createStore = redux.createStore;

// actions
const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

// action creators
const buyCake = (data) => {
  return {
    type: BUY_CAKE,
    data
  }
}

const buyIceCreams = (data) => {
  return {
    type: BUY_ICE_CREAM,
    data
  }
}

const initialState = {
  noOfCakes: 10,
  noOfIceCreams: 20,
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - parseInt(action.data)
      }

    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - parseInt(action.data)
      }

    default:
      return state;
  }
}

// store
const store = createStore(reducer);
console.log("[Initial State]", store.getState());

// subscribe
const unsubscribe = store.subscribe(() => console.log("[Updated State]", store.getState()))

// dispatch
store.dispatch(buyCake(1));
store.dispatch(buyCake(1));
store.dispatch(buyCake(1));

store.dispatch(buyIceCreams(2));
store.dispatch(buyIceCreams(2));
store.dispatch(buyIceCreams(2));

// unsubscribe
unsubscribe();