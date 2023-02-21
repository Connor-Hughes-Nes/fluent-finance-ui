import React, { useEffect, useState } from 'react'

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Transaction from '../../components/transaction/Transaction';
import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { noOp } from '@neslotech/utils';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';

import { loadTransaction, updateTransaction } from '../../actions/transaction.actions'
import { useDispatch } from 'react-redux';

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

const TransactionContainer = () => {
  const [loading, setLoading] = useState( false); //?
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTransaction(() => setLoading(false)))
  }, [dispatch])

  const onSave = (payload) => {
    dispatch(updateTransaction(payload));
  };

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Transaction  />
    </main>
  )
};

export default TransactionContainer;