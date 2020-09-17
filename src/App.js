import React from 'react';
import { HeaderTime } from './components/Header';
import { Header1 } from './components/Header1'
import { Years } from './components/Years';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TimeList';
import SimpleAnnualMethod from './components/SimpleAnnualMethod';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import Payback from './components/Payback';
import "./App.css"

function App() {
  return (
    <GlobalProvider >
      <Router>
        <Switch>



          <Route path="/">
            <HeaderTime />
            <Payback />
          </Route>

          <Route path="SAM" component={Header1} />


        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
