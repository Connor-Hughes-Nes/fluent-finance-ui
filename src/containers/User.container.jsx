import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginContainer from './authentication/Login.container';
import DashboardContainer from './dashboard/Dashboard.container'

const UserContainer = () => (
  <Routes>
    <Route exact path="/" element={<LoginContainer />} />
    <Route exact path="/dashboard" element={<DashboardContainer />} />
  </Routes>
);

export default UserContainer;
