import React, { useState } from 'react';
import { Input } from '../Input/Input';

import './transaction.scss'
import { Button } from '../button/Button';

const serverify = (form) => ({
  income: form.income,
  expense: form.expense,
  budget: form.budget
});

const Transaction = ({ onSave }) => {
  // const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleSubmit = (newState) => {
    const payload = serverify(form);
    onSave(payload);
  };

  const handleChange = (newState) => {
    setForm({ ...form, ...newState });
  }

  return (
    <article className='transaction'>
      <section className='transaction__actions'>
        <header className="transaction__header">
          <h2 className='transaction__title'>Transactions</h2>
          <main className='transaction__content'>
            <div className="transaction__content-money">
              <Input value={form.income} type='number' label='enter your monthly income' name='income' onChange={handleChange} />
              <Input value={form.expense} type='number' label='enter your monthly expenses' name='expenses' onChange={handleChange} />
            </div>
              <Input value={form.budget} type='number' label='enter your monthly budget' name='budget' onChange={handleChange} />
            <div className="transaction__content-actions">
              <Button placeholder="Calculate" label="Calculate" type="submit" onClick={handleSubmit} /> {/*onClick={() => navigate('/dashboard')}*/}
            </div>
          </main>
        </header>
      </section>
    </article>
  );
}

export default Transaction;