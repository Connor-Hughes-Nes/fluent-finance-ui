
// export const SET_BUDGET = '[BUDGET_STORE] Set Budget';
// export const setBudget = (id, payload, onSuccess) => ({
//   type: SET_BUDGET,
//   id,
//   payload,
//   onSuccess
// });

// The results of these interactions determine what is rendered on the UI. These interactions also trigger an action
// Calling an API is a common requirement in many apps.

export const LOAD_BUDGET = '[BUDGET_STORE] Load Budget';
export const SET_BUDGET = '[BUDGET_STORE] Set Budget';
export const loadBudget = (id, payload) => ({
  type: LOAD_BUDGET,
  id,
  payload
});



// export const test = '[BUDGET_STORE] Load Budget';
// export const test = '[BUDGET_STORE] Set Budget';
// export const test = (id, payload) => ({
//   type: test,
//   id,
//   payload
// });
