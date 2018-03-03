/**
 * External dependencies
 */
import { combineReducers } from "redux";

/**
 * Reducer keeping track of the notification list.
 *
 * @param {Object} state   State.
 * @param {Object} action  Action object.
 *
 * @return {Object}        Updated state.
 */
function notifications(state = [], action) {
  switch (action.type) {
    case "NOTIFICATIONS_ADD":
      return [...action.notifications, ...state];
  }

  return state;
}

export default combineReducers({ notifications });
