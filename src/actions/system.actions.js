export const ADD_SYSTEM_NOTICE = '[SYSTEM_STORE] Add system notice';
export const addSystemNotice = (title, alertType = 'Success') => ({
  type: ADD_SYSTEM_NOTICE,
  title,
  alertType
});

//export const REMOVE_SYSTEM_NOTICE = '[SYSTEM_STORE] Remove system notice';
// export const removeSystemNotice = (id) => ({
//   type: REMOVE_SYSTEM_NOTICE,
//   id
// });
