import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import ProductReducer from './Redux/ProductReducer';
import ProductMaxReducer from './Redux/ProductMaxReducer';
import ProductInitialReducer from './Redux/ProductInitialReducer';
import AdminReducer from './Redux/AdminReducer';
let rootReducer = combineReducers({
  ProductReducer,
  ProductInitialReducer,
  ProductMaxReducer,
  AdminReducer,

})
let store = configureStore ({
  reducer : rootReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
