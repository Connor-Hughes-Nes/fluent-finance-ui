import React from 'react';

import { Route, Routes } from 'react-router-dom';
import LoginContainer from './authentication/Login.container';

const UserContainer = () => (

  <Routes>
    <Route exact path="/" element={<LoginContainer />} />
    {/*<Route exact path="/water" component={Water}/>*/}
    {/*<Route exact path="/earth" component={Earth}/>*/}
    {/*<Route exact path="/fire" component={Fire}/>*/}
    {/*<Route exact path="/air" component={Air}/>*/}
  </Routes>
)

export default UserContainer;
