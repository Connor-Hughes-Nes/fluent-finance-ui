import Cookies from 'js-cookie';

const ACCESS_TOKEN_ID = 'fluent-finance-auth-token';

/** Sets the auth token cookie */
export const setAuthTokenCookie = (token) => {
  Cookies.set(ACCESS_TOKEN_ID, token);
};

/** Get the auth token cookie */
export const getAuthTokenCookie = () => {
  return Cookies.get(ACCESS_TOKEN_ID);
};
