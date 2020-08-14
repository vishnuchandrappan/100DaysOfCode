/**
 * Uses Redux Logger Package
 *
 * ?
 * import the middleware
 * add applyMiddleware as second param to createStore
 * pass the middleware as param to applyMiddleware
 */

const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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
 *
 * MiddleWare is passed as a second param to store
 */
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);


// dispatches for testing
store.dispatch(buyCake(1));
store.dispatch(buyCake(1));
store.dispatch(buyCake(1));

store.dispatch(buyIceCreams(2));
store.dispatch(buyIceCreams(2));
store.dispatch(buyIceCreams(2));
