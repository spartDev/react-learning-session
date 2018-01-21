import React, { Component } from 'react';
import { connect } from 'react-redux';

import './AddTodo.css';

class AddTodo extends Component {

    render() {
      return (
        <div className="addTodo">
          <form className="addTodo__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="addTodo__input"
              ref={node => { this.input = node }}
            />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
      );
    }
}
export default AddTodo;
