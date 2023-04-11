import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { ReactComponent as BudgetIcon } from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon } from '../../icons/transaction-icon.svg';

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

const DashboardContainer = () => {

  return (
    <main>
      <Sidebar items={items} />
      <Header />
      <Dashboard />
    </main>
  )
}

export default DashboardContainer;