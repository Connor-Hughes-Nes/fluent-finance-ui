import React, { useState } from 'react';

import { Input } from 'src/components/commonComponents/Input.jsx'

const serverify = ({ email, password }) => ({
  email,
  password
})

const Login = ({}) => {
  const [form, setForm] = useState(undefined);
  const handleChange = (newState) => setForm({ ...form, ...newState });

  return (
    <section className="login">
      <form className="form">
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
    </section>
  )
};

export default Login;
