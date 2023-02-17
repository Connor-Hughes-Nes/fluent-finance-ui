import {
  SET_BUDGET
} from '../actions/budget.actions';

export const initialState = {
  budget: undefined
};
//testing close PR

//The function you pass to reduce is known as a “reducer”.
// It takes the result so far and the current item, then it returns the next result.
// React reducers are an example of the same idea: they take the state so far and the action,
// and return the next state. In this way, they accumulate actions over time into state.

export function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUDGET:
      const { budget } = action;
      return {
        ...state,
        budget
      }
    default:
      return state;
  }
}