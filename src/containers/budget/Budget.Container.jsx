import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Budget from '../../components/budget/Budget'
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import { loadTransaction as loadBudget } from '../../actions/transaction.actions';

import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';

const BudgetContainer = () => {
  const dispatch = useDispatch();

  const budget = useSelector(({ transaction_store }) => transaction_store.transaction);

  useEffect(() => {
    dispatch(loadBudget(15))
  }, [budget]); // TODO: Fix this

  //select state store and align the value to the input

  const items = [
    {
      label: "Home",
      icon: <HomeIcon/>,
      link: '/dashboard'
    },
    {
      label: "Budget",
      icon: <BudgetIcon/>,
      link: '/budget'
    },
    {
      label: "Transactions",
      icon: <TransactionIcon/>,
      link: '/transaction'
    }
  ];

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Budget budget={budget} />
    </main>
  )
};

export default BudgetContainer;