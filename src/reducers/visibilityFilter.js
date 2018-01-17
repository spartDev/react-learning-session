import { SET_VISIBILITY_FILTER } from '../actions';

// This is our initial state
const initialState = 'SHOW_ALL';

// This is our visibilityFilter reducer
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
