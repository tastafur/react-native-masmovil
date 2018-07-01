import { combineReducers } from 'redux';
import { commons } from './commons'
import { user } from './user'
import { error } from './error'

const AppReducer = combineReducers({
  user,
  commons,
  error
});

const rootReducer = (state, action) => {
  if (action.type === TOTAL_LOGOUT) {
    state = undefined;
  }
  return AppReducer(state, action);
};

export default rootReducer;
