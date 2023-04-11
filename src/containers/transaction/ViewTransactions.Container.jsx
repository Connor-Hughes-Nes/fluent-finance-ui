import React from 'react'

import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import ViewTransactions from '../../components/transaction/ViewTransactions';

const TransactionContainer = () => {
  const items = [
    {
      label: "Home",
      icon: <HomeIcon />,
      link: '/dashboard'
    },
    {
      label: "Budget",
      icon: <BudgetIcon />,
      link: '/budget'
    },
    {
      label: "Transactions",
      icon: <TransactionIcon />,
      link: '/transaction'
    }
  ];

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <ViewTransactions />
    </main>
  )
};

export default TransactionContainer;