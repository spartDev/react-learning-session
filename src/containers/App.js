import React, { Component } from 'react';

import { Header } from '../components';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
      <main className="App__main">
        <AddTodo />
        <TodoList />
        <Footer />
      </main>
      </div>
    );
  }
}

export default App;
