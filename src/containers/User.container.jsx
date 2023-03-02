import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginContainer from './authentication/Login.container';
import DashboardContainer from './dashboard/Dashboard.container'
import BudgetContainer from './budget/Budget.Container';
import TransactionContainer from './transaction/Transaction.Container';
import ViewTransactionsContainer from './transaction/ViewTransactions.Container';

const UserContainer = () => (
  <Routes>
    <Route exact path="/" element={<LoginContainer />} />
    <Route exact path="/dashboard" element={<DashboardContainer />} />
    <Route exact path="/budget" element={<BudgetContainer />} />
    <Route exact path="/transaction" element={<TransactionContainer />} />
    <Route exact path="/transactions" element={<ViewTransactionsContainer />} />
  </Routes>
);

export default UserContainer;
