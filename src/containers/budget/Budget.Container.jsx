import React from 'react'

import Budget from '../../components/budget/Budget'
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { noOp } from '@neslotech/utils';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';
import { useNavigate } from 'react-router-dom';

const BudgetContainer = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: <HomeIcon/>,
      onClick: navigate('/dashboard')
    },
    {
      label: "Budget",
      icon: <BudgetIcon/>,
      onClick: navigate('/budget')
    },
    {
      label: "Transactions",
      icon: <TransactionIcon/>,
      onClick: navigate('/transaction')
    }
  ];

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Budget />
    </main>
  )
};

export default BudgetContainer;