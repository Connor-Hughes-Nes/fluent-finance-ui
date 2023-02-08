
export const EDIT_BUDGET = '[BUDGET_STORE] Edit Budget';
export const editBudget= (id, bankingDetailsId, payload, onSuccess) => ({
  type: EDIT_BUDGET,
  id,
  payload,
  onSuccess
});
