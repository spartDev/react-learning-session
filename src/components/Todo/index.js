import React from 'react';

import './Todo.css';


const Todo = ({ text, onClick, completed }) => (
  <div className="todo" onClick={onClick}>
    <div className="todo__inner">
      <div className="todo__circle" style={{ background: completed ? '#CCC' : 'none' }}/>
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</div>
    </div>
  </div>
);

export default Todo;
