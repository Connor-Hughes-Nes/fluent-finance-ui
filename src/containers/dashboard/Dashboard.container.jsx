import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import DashboardCard from '../../components/dashboard/DashboardCard';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const DashboardContainer = () => {
  // const user = useSelector(({ user_store }) => user_store.user)

  return (
    <main>
      <div>
        <Sidebar />
        <Header />
      </div>
      {/*<div>*/}
      {/*  <h1>Test Content</h1>*/}
      {/*</div>*/}
    </main>

  )
}

export default DashboardContainer;