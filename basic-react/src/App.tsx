import React, { useState }from 'react';
import Expense from './components/Expense';
import Income from './components/Income';
import Saving from './components/Saving';
import TransferSaving from './components/TransferSaving';

import './App.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [saving, setSaving] = useState(0);

  const handleBalance = (input: string, from: string, to: string) => {
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
        case 'balance':
          switch(to) {
            case 'expense':
              if (value > balance) {
                alert('Expense is larger than balance');
              } else {
                setBalance(balance - value);
              }
              break;
            case 'saving':
              if (value > balance) {
                alert('can not transfer saving larger than balance');
              } else {
                setBalance(balance - value);
                setSaving(saving + value);
              }
              break;
          }
          break;
        case 'saving':
          if (value > saving) {
            alert('can not withdraw amount larger than saving');
          } else {
            setSaving(saving - value);
            setBalance(balance + value);
          }
      }
    }
  }

  // const handleSaving = (input: string) => {
  // }

  return (
    <div className='App'>
      <div className='Wrapper'>
        <Income balance={balance} handleBalance={handleBalance}/>
        <Expense balance={balance} handleBalance={handleBalance} />
        <Saving saving={saving} />
      </div>
      <div className='Wrapper--balance'>
        <div>Current balance: {balance}</div>
        <TransferSaving balance={balance} saving={saving} handleBalance={handleBalance} />
      </div>
    </div>
  );
}

export default App;
