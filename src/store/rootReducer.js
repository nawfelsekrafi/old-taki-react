import { combineReducers } from '@reduxjs/toolkit';
import { reducer as chaptersReducer } from '../slices/chapters';

const combinedReducer = combineReducers({
  chapters: chaptersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
