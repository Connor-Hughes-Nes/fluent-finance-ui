import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { budgetReducer} from './budget.reducer';

const rootReducer = combineReducers({
  auth_store: authReducer,
  budget_reducer: budgetReducer
});

export default rootReducer;
