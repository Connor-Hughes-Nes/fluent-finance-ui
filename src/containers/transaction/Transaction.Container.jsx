import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Transaction from '../../components/transaction/Transaction';

const TransactionContainer = ({ items }) => {

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Transaction />
    </main>
  )
};

export default TransactionContainer;