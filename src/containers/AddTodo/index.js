import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';

import './AddTodo.css';

class AddTodo extends Component {

    handleSubmit = event => {
      const { dispatch } = this.props;
      event.preventDefault();
      dispatch(addTodo(this.input.value));
      this.input.value = '';
    }

    render() {
      return (
        <div className="addTodo">
          <form className="addTodo__form" onSubmit={this.handleSubmit}>
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
export default connect()(AddTodo);
