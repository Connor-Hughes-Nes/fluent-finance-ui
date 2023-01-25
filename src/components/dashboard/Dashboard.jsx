import React from 'react'
import DashboardCard from './DashboardCard';
import { ReactComponent as HomeIcon} from '../../icons/home-icon.svg';
import {ReactComponent as BudgetIcon} from '../../icons/budget-bdage-icon.svg';
import {ReactComponent as TransactionIcon} from '../../icons/transaction-badge-icon.svg';


import './dashboard.scss'

const Dashboard = () => {

  return (
    <article className="dashboard">
      <section className="dashboard__actions">
        <header className="dashboard__header">
          <h2 className="dashboard__title">Welcome to Fluent Finance</h2>
          <main onChange="dashboard__cards">
            <DashboardCard
              title="Budget"
              // label="Budget"
              path="/budget"
              icon={<BudgetIcon/>}
            />
            {/*<DashboardCard*/}
            {/*  title="Transactions"*/}
            {/*  path="/transactions"*/}
            {/*  icon={<TransactionIcon/>}*/}
            {/*/>*/}
            {/*<DashboardCard*/}
            {/*  title="Meeting Budget"*/}
            {/*  path="/"*/}
            {/*  icon={<HomeIcon/>}*/}
            />
          </main>
        </header>
      </section>
    </article>
  )
}

export default Dashboard;