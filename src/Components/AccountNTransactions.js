import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ViewTransaction from './App';
import ViewAccountDetails from './ViewAccountDetails'
import AddTransactionPage from './AddTransaction';


ReactDOM.render(
  <React.StrictMode>
    <AddTransactionPage /><br></br>
    <ViewAccountDetails /><br></br>
    <ViewTransaction />
  </React.StrictMode>,
  document.getElementById('root')
);
