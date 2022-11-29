import React from 'react';

export const Button = ({
  label,
  type,
  onClick
}) => {
  return (
    <button className='button'>
      type={type}
      onClick={onClick}
      label={label}
    </button>
  )
};