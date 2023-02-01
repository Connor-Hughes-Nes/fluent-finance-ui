import React from 'react';

import './button.scss';

export const Button = ({ label, type, onClick }) => {
  //TODO Defining modifiers?

  return (
    <button className="button" placeholder={label} onClick={onClick} type={type} >
      {label}
    </button>
  );
};
