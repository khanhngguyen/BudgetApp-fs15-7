import React from 'react';
import Balance from './components/Balance';
import Expense from './components/Expense';
import Income from './components/Income';
import Saving from './components/Saving';
import TransferSaving from './components/TransferSaving';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Wrapper'>
        <Income />
        <Expense />
        <Saving />
      </div>
      <div className='Wrapper--balance'>
        <Balance />
        <TransferSaving />
      </div>
    </div>
  );
}

export default App;
