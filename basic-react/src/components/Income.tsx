import React, { useState } from 'react'
import Props from '../types/Props'

interface IncomeProps extends Props {
    balance: number
    handleBalance: (input: string, from: string) => void
}

const Income = (props: IncomeProps) => {
    const [amount, setAmount] = useState('0');
    const [source, setSource] = useState('salary');
    const [date, setDate] = useState(new Date());

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }

    const showIncome = () => {
        const item = document.createElement('li');
        const dateStr = date.toLocaleDateString('en-US');
        item.innerText = `Income from ${source}, amount: ${amount}€, from ${dateStr}`;
        document.querySelector('#income-list')?.appendChild(item);
    }

    return (
        <div className='Input'>
            <label htmlFor='income-source'>Income source:</label>
            <select
            name='income-source'
            id='income-source'
            value={source}
            onChange={e => setSource(e.target.value)}>
                <option defaultValue='salary'>Salary</option>
                <option value='other'>Other</option>
            </select>
            <label htmlFor='income-amount'>Amount:</label>
            <input
            type='text'
            name='income-amount'
            id='income-amount'
            value={amount}
            onChange={e => handleAmount(e)}
            />
            <label htmlFor='income-date'>Date of income</label>
            <input
            type='date'
            name='income-date'
            id='income-date'
            defaultValue={new Date(date).toLocaleDateString('en-CA')}
            onChange={e => setDate(new Date(e.target.value))}
            />
            <button onClick={() => {
                props.handleBalance(amount, 'income');
                showIncome();
                }}>Add income</button>
            <div>
                <ul id='income-list'></ul>
            </div>
        </div>
    )
}

export default Income