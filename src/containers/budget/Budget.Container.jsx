import React from 'react'

import Budget from '../../components/budget/Budget'
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { noOp } from '@neslotech/utils';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';

const items = [
  {
    label: "Home",
    icon: <HomeIcon/>,
    onClick: noOp
  },
  {
    label: "Budget",
    icon: <BudgetIcon/>,
    onClick: noOp
  },
  {
    label: "Transactions",
    icon: <TransactionIcon/>,
    onClick: noOp
  }
];

const BudgetContainer = () => {

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Budget />
    </main>
  )
};

export default BudgetContainer;