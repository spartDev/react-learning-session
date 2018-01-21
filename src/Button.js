import React from 'react';
// import propTypes from 'prop-types';
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

// Button.propTypes = {
//   children: PropTypes.string,
//   action: PropTypes.func,
// };
//
// Button.defaultProps = {
//   children: 'toto',
// } ;

export default Button;
