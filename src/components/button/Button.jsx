import React from 'react';

import './button.scss';

export const Button = ({ label, type, onClick }) => {
  //TODO Defining modifiers?

  return (
    <button placeholder={label} onClick={onClick} type={type} className="button">
      {/*label*/}
      Login
      {/*  ??  */}
    </button>
  );
};
