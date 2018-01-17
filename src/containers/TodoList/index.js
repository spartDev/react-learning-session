import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Todo } from '../../components';
import { toggleTodo } from '../../actions';

import './TodoList.css';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

class TodoList extends Component {

  render() {
    return (
      <div className="todoList">
        {this.props.todos.map(todo =>
          <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)} />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
