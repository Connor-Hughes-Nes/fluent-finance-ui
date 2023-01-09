export const AUTHENTICATE = '[AUTH_STORE] Authenticate';

export const authenticate = (accountDetails, navigate, onComplete) => ({
  type: AUTHENTICATE,
  accountDetails,
  navigate,
  onComplete
});
