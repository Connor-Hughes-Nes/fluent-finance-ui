
// REDUCER: In redux, the reducers are the pure functions that contain the logic and calculation
// that needed to be performed on the state. These functions accept the initial state of the state being used
// and the action type. *It updates the state and responds with the new state*

//take in intial statte, perform logic, return new state

import { SET_TRANSACTION } from '../actions/transaction.actions';

export const initialState = {
  transaction: undefined
};

export function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTION:
      const { transaction } = action;
      return {
        ...state,
        transaction
      }
    default:
      return state;
  }
}