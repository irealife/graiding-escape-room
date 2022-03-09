import React, { StrictMode } from 'react';
import {render} from 'react-dom';
import App from 'components/app/app';
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {ToastContainer} from 'react-toastify';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

render (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </StrictMode>,
  document.getElementById('root'),
);
