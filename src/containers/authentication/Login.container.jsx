import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from '../../components/authentication/Login';
import { authenticate } from '../../actions/auth.actions';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onLogin = (accountDetails) => {
    setLoading(true);
    dispatch(authenticate(accountDetails, navigate, () => setLoading(false)));
  };

  return <Login onLogin={onLogin} />;
};

export default LoginContainer;
