import React from 'react'
import DashboardCard from './DashboardCard';

import './dashboard.scss'

const Dashboard = () => {

  return (
    <article className="dashboard">
      <section className="dashboard__actions">
        <header className="dashboard__header">
          <h2 className="dashboard__title">Welcome to Fluent Finance</h2>
          <main onChange="dashboard__cards">
            {/*<DashboardCard*/}
            {/*  title="Budget"*/}
            {/*  path="/budget"*/}
            {/*/>*/}
            {/*<DashboardCard*/}
            {/*  title="Transactions"*/}
            {/*  path="/transactions"*/}
            {/*/>*/}
            {/*<DashboardCard*/}
            {/*  title="Meeting Budget"*/}
            {/*  path="/"*/}
            {/*/>*/}
          </main>
        </header>
      </section>
    </article>
  )
}

export default Dashboard;