import React from 'react'

import Budget from '../../components/budget/Budget'
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

const BudgetContainer = ({ items }) => {

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Budget />
    </main>
  )
};

export default BudgetContainer;