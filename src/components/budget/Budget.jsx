import React from 'react';
import { Input } from '../Input/Input';

import './budget.scss'
import { number } from 'prop-types';

const Budget = () => (

  <article className='budget'>
    <section className='budget__actions'>
      <header className="budget__header">
        <h2 className='budget__title'>Budget</h2>
        <h4 className='budget__subtitle'>Monthly Budget</h4>
        <p className='budget__text'>Add a transaction to view your budget</p>
        <main className='budget__content'>
          <Input type="number" label='monthly budget' name='budget' />
          {/*<Input label='enter your budget' name='budget' />*/}
          {/*<Input label='enter your expenses' name='expenses' />*/}
          {/*<Input label='enter your budget' name='budget' />*/}
        </main>
      </header>
    </section>
  </article>
)

export default Budget;