import React from 'react';
import { Input } from '../Input/Input';

import './transaction.scss'
import { number } from 'prop-types';

const Transaction = () => (

  <article className='transaction'>
    <section className='transaction__actions'>
      <header className="transaction__header">
        <h2 className='transaction__title'>Transactions</h2>
        <main className='transaction_content'>
          {/*TODO: Allow only numbers*/}
          <Input type={number} label='enter your monthly income' name='income' />
          <Input label='enter your budget' name='budget' />
          <Input label='enter your expenses' name='expenses' />
          {/*<Input label='enter your budget' name='budget' />*/}
        </main>
      </header>
    </section>
  </article>
)

export default Transaction;