const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

/**
 * Actions and Action Creators
 */
const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

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

/**
 * Initial State
 */

const initialCakeState = {
  noOfCakes: 10,
}

const initialIceCreamState = {
  noOfIceCreams: 20,
}


/**
 * Reducers
 */
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {

    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - parseInt(action.data)
      }

    default:
      return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {

    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - parseInt(action.data)
      }

    default:
      return state;
  }
}

/**
 * Root Reducer
 * (Combined)
 */
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})


/**
 * Store
 */
const store = createStore(rootReducer);
console.log("[Initial State]", store.getState());

// subscribe
const unsubscribe = store.subscribe(() => console.log("[Updated State]", store.getState()))

// dispatches for testing
store.dispatch(buyCake(1));
store.dispatch(buyCake(1));
store.dispatch(buyCake(1));

store.dispatch(buyIceCreams(2));
store.dispatch(buyIceCreams(2));
store.dispatch(buyIceCreams(2));

unsubscribe();

/** Accessing State
 *  state.cake & state.iceCream
 */