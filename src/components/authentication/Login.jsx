import React, { useState } from 'react';

import { Input } from 'src/components/commonComponents/Input.jsx'
import { Button } from '../button/Button';
// import { Route, Router } from 'react-router-dom';

const serverify = ({ email, password }) => ({
  email,
  password
})

const Login = ({ onLogin }) => {
  const [form, setForm] = useState(undefined);
  const handleChange = (newState) => setForm({ ...form, ...newState });

  const onSubmit = () => {
    const accountDetails = serverify(form);
    onLogin(accountDetails);
  };

  return (
    <section className="login">
      <form className="login-form">
        <Input
          name="email"
          label="Email Address"
          placeholder="Email Address"
          type="email"
          value={form?.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          placeholder="Password"
          value={form?.password}
          onChange={handleChange}
        />
      </form>
      <section className="form-action">
        <Button
          type="submit"
          onClick={onSubmit}
        />
      </section>
    </section>
)
};

export default Login;
