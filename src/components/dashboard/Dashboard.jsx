import React from 'react'
import DashboardCard from './DashboardCard';
import {ReactComponent as BudgetIcon} from '../../icons/budget-bdage-icon.svg';
import {ReactComponent as TransactionIcon} from '../../icons/transaction-badge-icon.svg';

import './dashboard.scss'
import BudgetCard from './BudgetCard';

const Dashboard = () => {

  return (
    <article className="dashboard">
      <section className="dashboard__actions">
        <header className="dashboard__header">
          <h2 className="dashboard__title">Welcome to Fluent Finance</h2>
            <main className="dashboard__cards">
              <DashboardCard
                title="Budget"
                path="/budget"
                content="Get started on planning your budgets, savings, expenses and more!"
                icon={<BudgetIcon/>}
              />
              <DashboardCard
                title="Transactions"
                path="/transaction"
                content="Plan your monthly transactions to stay ahead of the curb!"
                icon={<TransactionIcon/>}
              />
            </main>
          <BudgetCard
            title="Meeting Budget"
          />
        </header>
      </section>
    </article>
  )
}

export default Dashboard;