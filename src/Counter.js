import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { store } from './redux/store';
import { countUp, countDown } from './redux/actions';
import { countReducer } from './redux/reducers';
import Button from './Button';
import './Counter.css';

class Counter extends Component {

   // Initializing state inside of the constructor comes with an overhead
   // of calling super and remembering about props which are React’s abstraction
   // which leaks here a little. We can initialize state directly as a class property.

   // Due to the fact that the state is defined on the instance,
   // we still have access to this during state initialization.
   // This makes it possible to use props to initialize the state

   // state = {
   //   count: 0,
   // }

   // We can benefit from the fact that arrow function preserves context
   // in which was defined and set handler directly as a class field.

   handleCountUp = (number) => {
     this.props.onCountUp(number)
   }

   handleCountDown = (number) => {
     this.props.onCountDown(number)
   }

  render() {

    // console.log(this.props);

    // // Log the initial state
    // console.log(store.getState());
    //
    // // Dispatch an action
    // store.dispatch(countUp(0));
    //
    // // Log the new state
    // console.log(store.getState());

    return (
      <div className="countComponent">
        <Button action={() => this.handleCountDown(this.props.count)}>Count Down</Button>
        <h2>{this.props.count}</h2>
        <Button action={() => this.handleCountUp(this.props.count)}>Count Up</Button>
      </div>
    );
  }
}

// you need to define a special function called mapStateToProps that tells how to transform
// the current Redux store state into the props you want to pass to your component you are wrapping
const mapStateToProps = state => {
  return {
    count: countReducer(state.count)
  }
}

// you need to define another special function called mapDispatchToProps
// that receives the dispatch() method and returns callback props
// that you want to inject into the component
const mapDispatchToProps = dispatch => {
  return {
    onCountUp: number => {
      dispatch(countUp(number))
    },
    onCountDown: number => {
      dispatch(countDown(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
