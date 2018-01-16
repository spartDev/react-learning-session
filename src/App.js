import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* Here our counter component */}
        <Counter />

        {/* We can set our component width props (initial data) */}
        {/* <Counter SetcountNumberTo={4}/> */}
      </div>
    );
  }
}

export default App;
