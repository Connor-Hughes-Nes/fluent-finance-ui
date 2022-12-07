import './App.css';
import AuthProvider from './providers/Auth.provider';
// import Login from './components/authentication/Login';
import { Input } from './components/Input/Input';

// import React from 'react';
// import { ReactComponent as logo } from 'src/icons/FF-Logo.svg';

const style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const App = () => {
  return (
    <div style={style}>
      <AuthProvider>
        {/*<Login />*/}
        <Input />
      </AuthProvider>
    </div>
  );
};

export default App;
