import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { ReactComponent as HomeIcon} from '../../icons/home-icon.svg';
import { ReactComponent as BudgetIcon} from '../../icons/budget-icon.svg';
import { ReactComponent as TransactionIcon} from '../../icons/transaction-icon.svg';
import { useNavigate } from 'react-router-dom';

const items = (navigate) => [
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
    onClick: navigate('/transactions')
  }
];


const DashboardContainer = (path) => {
  // const user = useSelector(({ user_store }) => user_store.user)
  const navigate = useNavigate();

  return (
    <main>
      <Sidebar path={path} items={items(navigate)}/>
      <Header />
      <Dashboard />
    </main>
  )
}

export default DashboardContainer;