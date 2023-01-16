import React from 'react';
// import App from './App';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import authSaga from './sagas/auth.saga';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import Login from './components/authentication/Login';

import './index.css';
import UserContainer from './containers/User.container';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/*<DashboardCard />*/}
        <UserContainer />
      {/*  App*/}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
