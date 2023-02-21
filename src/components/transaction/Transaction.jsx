import React, { useState } from 'react';
import { Input } from '../Input/Input';

import './transaction.scss'
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';


const serverify = (form) => ({
  income: form.income,
  expense: form.expense,
  budget: form.budget
});

const Transaction = ({ onSave }) => {
  // const navigate = useNavigate();
  const [form, setForm] = useState();

  const handleSubmit = (newState) => {
    setForm({ ...form, ...newState });
    const payload = serverify(form);
    onSave(payload);
  };

  return (
    <article className='transaction'>
      <section className='transaction__actions'>
        <header className="transaction__header">
          <h2 className='transaction__title'>Transactions</h2>
          <main className='transaction__content'>
            {/*TODO: Allow only numbers*/}
            <div className="transaction__content-money">
              <Input value={form} type='number' label='enter your monthly income' name='income' onChange={handleSubmit} />
              <Input value={form} type='number' label='enter your monthly expenses' name='expenses' onChange={handleSubmit} />
            </div>
              <Input value={form} type='number' label='enter your monthly budget' name='budget' onChange={handleSubmit} />
            <div className="transaction__content-actions">
              <Button placeholder="Calculate" label="Calculate" type="submit" /> {/*onClick={() => navigate('/dashboard')}*/}
            </div>
          </main>
        </header>
      </section>
    </article>
  );
}

export default Transaction;