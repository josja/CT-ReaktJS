/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import { SET_PAGE } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = {
  restaurants: [],
  currentpage: 0,
  hasmore: false,
  city: ""
};

function restaurantsReducer(state = initialState, action) {
  Object.freeze(state); //< Locked, use assign()
  switch (action.type) {
    case SET_PAGE:
      return assignToEmpty(state, action.restaurants);
    default:
      return state;
  }
}

export default restaurantsReducer;
