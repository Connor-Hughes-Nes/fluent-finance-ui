import React, { useState } from 'react';
import { Input } from '../Input/Input';

import './transaction.scss'
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleChange = (newValue) => {
    // const newValue = parseInt(event.target.value);
    setValue(newValue);
  };


  return (
    <article className='transaction'>
      <section className='transaction__actions'>
        <header className="transaction__header">
          <h2 className='transaction__title'>Transactions</h2>
          <main className='transaction__content'>
            {/*TODO: Allow only numbers*/}
            <div className="transaction__content-money">
              <Input value={value} type='number' label='enter your monthly income' name='income' onChange={handleChange} />
              <Input value={value} type='number' label='enter your monthly expenses' name='expenses' onChange={handleChange} />
            </div>
              <Input value={value} type='number' label='enter your monthly budget' name='budget' onChange={handleChange} />
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