const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

/** Initial State */
const initialState = {
  loading: false,
  users: [],
  error: ''
}

/** Actions and Action Creators */
const entity = "USER";

const FETCH_USERS_REQUEST = `[${entity}] FETCH_REQUEST`
const FETCH_USERS_SUCCESS = `[${entity}] FETCH_SUCCESS`
const FETCH_USERS_ERROR = `[${entity}] FETCH_ERROR`

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = data => {
  return {
    type: FETCH_USERS_SUCCESS,
    data
  }
}

const fetchUsersError = data => {
  return {
    type: FETCH_USERS_ERROR,
    data
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        const users = data.map(user => user.name)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(({ message }) => {
        dispatch(fetchUsersError(message))
      })
  }
}

/** Reducer */
const reducer = (state = initialState, { type, data }) => {
  switch (type) {

    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        users: [],
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: data,
      }

    case FETCH_USERS_ERROR:
      return {
        loading: false,
        error: data,
      }

  }
}

/** Store */
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)

/** Store */
store.dispatch(fetchUsers())