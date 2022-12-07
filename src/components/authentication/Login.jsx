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

  //TODO: Background image

  return (
    <section className="login">
      <div className="login__background">
        {/*<img className="logo" alt="Background" src={BgImage} />*/}
      </div>
      {/*<img className="logo" alt="Background" src={logo} />*/}
      <h1>Login</h1>
      <h3>Create an Account and Login</h3>
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
      <section className="form-action">
        <Button placeholder="Login" label="Login" type="submit" onClick={onSubmit} />
      </section>
    </section>
  );
};

export default Login;
