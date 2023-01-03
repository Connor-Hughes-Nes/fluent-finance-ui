import React, { useState } from 'react';

import { Input } from '../Input/Input.jsx';
import { Button } from '../button/Button';
// // import { Route, Router } from 'react-router-dom';
//
// import {ReactComponent as logo} from '../../icons/FF-Logo.svg';
// import {ReactComponent as BgImage} from '/public/login-bg-image.svg';

import './login.scss'

const serverify = ({ email, password }) => ({
  email,
  password
});

const Login = ({ onLogin }) => {
  const [form, setForm] = useState(undefined);
  const handleChange = (newState) => setForm({ ...form, ...newState });

  const onSubmit = () => {
    const accountDetails = serverify(form);
    onLogin(accountDetails);
  };

  //TODO: Style components with classnames, not the component itself

  return (
    <section className="login">
      <h1>Login</h1>
      <h3>Create an Account and <span className="multi-colour">Login</span></h3>
      <form className="login__form">
        <Input
          name="email"
          label="Email Address"
          placeholder="Email Address"
          type="email"
          value={form?.email}
          onChange={handleChange}
        />
        <br/>
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={form?.password}
          onChange={handleChange}
        />
      </form>
      <section className="login__form-action">
        <Button placeholder="Login" label="Login" type="submit" onClick={onSubmit} />
      </section>
    </section>
  );
};

export default Login;
