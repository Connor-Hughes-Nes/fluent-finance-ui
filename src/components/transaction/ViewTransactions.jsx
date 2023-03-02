import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input/Input';
import { Button } from '../button/Button';

import './viewTransactions.scss'

const serverify = () => ({ //form
  // total_income: form.income,
  // expense: form.expense,
  // expense_type: form.expense_type,
  // income_type: form.income_type
});

const ViewTransactions = ({ onSave }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  // const handleSubmit = () => {
  //   const payload = serverify(form);
  //   onSave(payload);
  //   navigate('/budget')
  // };

  const handleChange = (newState) => {
    setForm({ ...form, ...newState });
  }

  return (
    <article className='transactions'>
      <section className='transactions__actions'>
        <header className="transactions__header">
          <h2 className='transactions__title'>View Latest Transaction</h2>
          <main className='transactions__content'>
            <div className="transactions__content-money">
              {/*TODO: Clean up buttons*/}
              <Input value={form.income} prefix='R' type='number' label='income' name='income' onChange={handleChange} />
              <Input value={form.expense} prefix='R' type='number' label='expenses' name='expense' onChange={handleChange} />
              <Input value={form.expense} prefix='R' type='number' label='budget goal' name='expense' onChange={handleChange} />
            </div>
            <div className="transactions__content-type">
              <Input value={form.income_type} type='text' label='income type' name='income_type' />
              <Input value={form.income_type} type='text' label='expense type' name='income_type' />
              {/*<Input value={form.expense_type} type='text' label='enter the expense type' name='expense_type' />*/}
            </div>
            <div className="transactions__content-actions">
              <Button placeholder="Dashboard" label="Dashboard" type="submit" onClick={() => navigate('/dashboard')} />
            </div>
          </main>
        </header>
      </section>
    </article>
  );
}


export default ViewTransactions;