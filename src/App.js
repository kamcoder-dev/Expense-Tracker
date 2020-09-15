import React from 'react';
import { Header } from './components/Header';
import { Years } from './components/Years';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TimeList';
import SimpleAnnualMethod from './components/SimpleAnnualMethod';

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
