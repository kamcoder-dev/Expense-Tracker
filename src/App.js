import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Payback from './components/Payback';

import './App.css';

function App() {
  return (
    <GlobalProvider >

      <div className="container">
        <Header />
        <Payback />
      </div>
    </GlobalProvider>
  );
}

export default App;
