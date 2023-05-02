import React, { useState } from 'react'
import Props from '../types/Props'

interface ExpenseProps extends Props {
    balance: number
    handleBalance: (input: string, from: string, to: string) => void
}

const Expense = (props: ExpenseProps) => {
    const [amount, setAmount] = useState('0');
    const [source, setSource] = useState('rent');
    const [extra, setExtra] = useState('');
    const [date, setDate] = useState(new Date());

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }
    
    const showExpense = () => {
        const item = document.createElement('li');
        const dateStr = date.toLocaleDateString('en-US');
        item.innerText = `Expense from ${source} ${extra ? extra : ''}, amount: ${amount}€, from ${dateStr}`;
        document.querySelector('#expense-list')?.appendChild(item);
    }

    return (
        <div className='Input'>
            <label htmlFor='expense-source'>Expense source:</label>
            <select 
            name='expense-source' 
            id='expense-source'
            value={source}
            onChange={e => setSource(e.target.value)}>
                <option defaultValue='rent'>Rent</option>
                <option value='utilities'>Utilities</option>
                <option value='supplies'>Supplies/Food/Household items</option>
                <option value='personal'>Personal</option>
                <option value='other'>Other</option>
            </select>
            <label htmlFor='expense-extra'>Extra information (optional):</label>
            <input
            type='text'
            name='expense-extra'
            id='expense-extra'
            value={extra}
            onChange={e => setExtra(e.target.value)}
            />
            <label htmlFor='expense-amount'>Amount:</label>
            <input
            type='text'
            name='expense-amount'
            id='expense-amount'
            value={amount}
            onChange={e => handleAmount(e)}
            />
            <label htmlFor='expense-date'>Date of expense</label>
            <input
            type='date'
            name='expense-date'
            id='expense-date'
            defaultValue={new Date().toLocaleDateString('en-CA')}
            onChange={e => setDate(new Date(e.target.value))}
            />
            <button onClick={() => {
                props.handleBalance(amount, 'balance', 'expense' );
                showExpense();
            }}>Add expense</button>
            <div>
                <ul id='expense-list'></ul>
            </div>
        </div>
    )
}

export default Expense