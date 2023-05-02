import React, { useState }from 'react';
import Expense from './components/Expense';
import Income from './components/Income';
import Saving from './components/Saving';
import TransferSaving from './components/TransferSaving';

import './App.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [saving, setSaving] = useState(0);
  const handleBalance = (input: string, from: string) => {
    const value = parseInt(input);
    if (isNaN(value)) {
      alert('Please type in a number');
    } else {
      switch(from) {
        case 'income':
          if (value < 0) {
            alert('Income can not be negative');
          } else {
            setBalance(balance + value);
          }
          break;
        case 'expense':
          if (value > balance) {
            alert('Expense is larger than balance');
          } else {
            setBalance(balance - value);
          }
          break;
      }
    }
  }
  return (
    <div className='App'>
      <div className='Wrapper'>
        <Income balance={balance} handleBalance={handleBalance}/>
        <Expense balance={balance} handleBalance={handleBalance} />
        <Saving saving={saving} />
      </div>
      <div className='Wrapper--balance'>
        <div>Current balance: {balance}</div>
        <TransferSaving />
      </div>
    </div>
  );
}

export default App;
