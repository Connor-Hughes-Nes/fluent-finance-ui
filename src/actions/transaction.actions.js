
// Actions are the only source of information for the store as per Redux official documentation.
// It carries a payload of information from your application to store. As discussed earlier,
// actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.

export const LOAD_TRANSACTION = '[TRANSACTION_STORE] Load Transaction';
export const SET_TRANSACTION = '[TRANSACTION_STORE] Set Transaction';
export const loadTransaction = (id, payload) => ({
  type: LOAD_TRANSACTION,
  id,
  payload
});