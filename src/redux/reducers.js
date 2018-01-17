// import { combineReducers } from 'redux';
import { COUNT_UP, COUNT_DOWN } from './actions'

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COUNT_UP:
    console.log(action);
      return {
        ...state,
        count: action.number,
      };
    case COUNT_DOWN:
    console.log(action);
      return {
        ...state,
        count: action.number,
      };
    default:
      return state;
  }

}

// export default combineReducers({
//   CountComponent: countReducer,
// });
