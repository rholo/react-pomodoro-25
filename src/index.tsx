import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './context';
import App from './App';
const app = (
  <StateProvider>
    <App />
  </StateProvider>
);

ReactDOM.render(app, document.getElementById('root'));
