import React, { Component } from 'react';
import Button from './Button';
import './Counter.css';

class Counter extends Component {

   // Initializing state inside of the constructor comes with an overhead
   // of calling super and remembering about props which are React’s abstraction
   // which leaks here a little. We can initialize state directly as a class property.

   // Due to the fact that the state is defined on the instance,
   // we still have access to this during state initialization.
   // This makes it possible to use props to initialize the state

   state = {
     count: 0,
   }

   // We can benefit from the fact that arrow function preserves context
   // in which was defined and set handler directly as a class field.

   handleCountUp = () => {
     this.setState({
       count: this.state.count + 1
    });
   }

   handleCountDown = () => {
     this.setState({
       count: this.state.count - 1
    });
   }

  render() {
    return (
      <div className="countComponent">
        <Button action={this.handleCountDown}>Count Down</Button>
        <h2>{this.state.count}</h2>
        <Button action={this.handleCountUp}>Count Up</Button>
      </div>
    );
  }
}

export default Counter;
