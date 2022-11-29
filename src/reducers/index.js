import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';

const rootReducer = combineReducers({
  auth_store: authReducer
});

export default rootReducer;
