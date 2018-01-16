import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className="button" onClick={props.action}>{props.children}</button>
  );
};


// We can destructuring our props (ES6)

// const Button = ({ action, children }) => {
//   return (
//     <button className="button" onClick={action}>{children}</button>
//   );
// };

export default Button;
