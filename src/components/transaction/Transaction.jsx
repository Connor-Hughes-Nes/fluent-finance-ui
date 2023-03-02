import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input/Input';
import { Button } from '../button/Button';

import './transaction.scss'

const serverify = (form) => ({
  total_income: form.income,
  expense: form.expense,
  expense_type: form.expense_type,
  income_type: form.income_type
});

const Transaction = ({ onSave }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    const payload = serverify(form);
    onSave(payload);
    navigate('/budget')
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
              <Input value={form.income} prefix='R' type='number' label='enter your monthly income' name='income' onChange={handleChange} />
              <Input value={form.expense} prefix='R' type='number' label='enter your monthly expenses' name='expense' onChange={handleChange} />
            </div>
            <div className="transaction__content-type">
              <Input value={form.income_type} type='text' label='enter the income type' name='income_type' />
              {/*<Input value={form.expense_type} type='text' label='enter the expense type' name='expense_type' />*/}
            </div>
            <div className="transaction__content-actions">
              <Button placeholder="Calculate" label="Calculate" type="submit" onClick={handleSubmit} /> {/*onClick={() => navigate('/dashboard')}*/}
              <Button placeholder="View All" label="View All" type="submit" onClick={() => navigate('/dashboard')} />
            </div>
          </main>
        </header>
      </section>
    </article>
  );
}


export default Transaction;