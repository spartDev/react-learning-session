import React, { Component } from 'react';

import { Header } from '../components';
import AddTodo from './AddTodo';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
      <main className="App__main">
        <AddTodo />
      </main>
      </div>
    );
  }
}

export default App;
