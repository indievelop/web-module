
import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import paginate from './paginate';

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, posts: {} }, action) => {
  if (action.response && action.response.entities) {
    return { ...state, ...action.response.entities };
  }

  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const router = (state = { pathname: '/' }, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ROUTER_STATE:
      return action.state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  entities,
  errorMessage,
  router,
  form
});

export default rootReducer;