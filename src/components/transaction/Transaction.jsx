import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input/Input';
import { Button } from '../button/Button';

import './transaction.scss'

const serverify = (form) => ({
  total_income: form.income,
  expense: form.expense,
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
              <Input value={form.income} type='number' label='enter your monthly income' name='income' onChange={handleChange} />
              <Input value={form.expense} type='number' label='enter your monthly expenses' name='expense' onChange={handleChange} />
            </div>
            {/*<Input value={form.budget} type='number' label='enter your monthly budget' name='budget' onChange={handleChange} />*/}
            {/*<Input value={form.transaction_amount} type='number' label='enter the transaction amount' name='expenses' onChange={handleChange} />*/}
            {/*<Input value={form.expense_type} type='number' label='enter the expense type' name='transactionType' onChange={handleChange} />*/}
            <div className="transaction__content-actions">
              <Button placeholder="Calculate" label="Calculate" type="submit" onClick={handleSubmit} /> {/*onClick={() => navigate('/dashboard')}*/}
            </div>
          </main>
        </header>
      </section>
    </article>
  );
}

//  "transaction_type"
//  "transaction_amount"
//  "total_income"
//  "expense"
//  "expense_date"
//  "income_type"
//  "expense_amount"
//  "expense_type"

export default Transaction;