import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { ReactComponent as HomeIcon} from '../../icons/home-icon.svg';
import { ReactComponent as BudgetIcon} from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon} from '../../icons/transaction-icon.svg';
import { noOp } from '@neslotech/utils';

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


const DashboardContainer = () => {
  // const user = useSelector(({ user_store }) => user_store.user)

  return (
    <main>
      <Sidebar items={items}/>
      <Header />
      <Dashboard />
    </main>
  )
}

export default DashboardContainer;