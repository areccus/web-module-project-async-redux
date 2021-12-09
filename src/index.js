import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import './index.css';
import {reducer} from './reducer/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
