// import Cookies from 'js-cookie';

import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth.context';

const ACCESS_TOKEN_ID = 'fluent-finance-auth-token';

// export const getAuthTokenCookie = () => {
//   return Cookies.get(ACCESS_TOKEN_ID);
// };

const AuthProvider = ({ children, value }) => {
  // const [token, setToken] = useState(getAuthTokenCookie());

  // const navigate = useNavigate();

  // understanding contexts
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
