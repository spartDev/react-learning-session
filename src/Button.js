import React from 'react';
import './Button.css';

const Button = ({ action, children }) => {
  return (
    <button className="button" onClick={action}>{children}</button>
  );
};

export default Button;
