import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store';

// All container components need access to the Redux store
// One option would be to pass it as a prop to every container component
// But we use a special React Redux component called <Provider>
// to magically make the store available to all components in the application
// without passing it explicitly. You only need to use it once when you render the root component
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
