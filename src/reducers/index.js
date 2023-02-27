import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { budgetReducer} from './budget.reducer';
import { transactionReducer} from './transaction.reducer';

const rootReducer = combineReducers({
  auth_store: authReducer,
  budget_reducer: budgetReducer,
  transaction_reducer: transactionReducer
});

export default rootReducer;
