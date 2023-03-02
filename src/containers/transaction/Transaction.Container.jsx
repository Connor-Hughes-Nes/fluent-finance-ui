import React from 'react'
import { useDispatch } from 'react-redux';

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Transaction from '../../components/transaction/Transaction';
import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';

import { updateTransaction } from '../../actions/transaction.actions'

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

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadTransaction(() => setLoading(false)))
  // }, [dispatch])

  const onSave = (payload) => {
    // debugger;
    dispatch(updateTransaction(payload));
  };

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Transaction onSave={onSave} />
    </main>
  )
};

export default TransactionContainer;