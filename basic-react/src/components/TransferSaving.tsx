import React, { useState } from 'react'

interface TransferSavingProps {
    balance: number
    saving: number
    handleBalance: (input: string, from: string, to: string) => void
}

const TransferSaving = (props: TransferSavingProps) => {
    const [transfer, setTransfer] = useState('0');
    const [withdraw, setWithdraw] = useState('0');

    const showTransfer = () => {
        const value = parseInt(transfer);
        //transfer amount must be a number & not larger than balance
        if (!isNaN(value) && value < props.balance) {
            const para = document.createElement('p');
            para.innerText = `You've transfered ${value}€ to saving account`;
            document.querySelector('#transfer-text')?.appendChild(para);
        }
    }

    const showWithdraw = () => {
        const value = parseInt(withdraw);
        //withdraw amount must be a number & not larger than saving
        if (!isNaN(value) && value < props.saving) {
            const para = document.createElement('p');
            para.innerText = `You've withdrawn ${value}€ from saving account`;
            document.querySelector('#withdraw-text')?.appendChild(para);
        }
    }

    return (
        <div className='Input'>
            <label htmlFor='saving-transfer'>Transfer to saving amount: </label>
            <input
            type='text'
            name='saving-transfer'
            id='saving-transfer'
            value={transfer}
            onChange={e => setTransfer(e.target.value)}
            />
            <button onClick={() => {
                props.handleBalance(transfer, 'balance', 'saving');
                showTransfer();
            }}
            >Transfer</button>
            <div id='transfer-text'></div>
            <label htmlFor='saving-withdraw'>Withdraw from saving amount: </label>
            <input
            type='text'
            name='saving-withdraw'
            id='saving-withdraw'
            value={withdraw}
            onChange={e => setWithdraw(e.target.value)}
            />
            <button onClick={() => {
                props.handleBalance(withdraw, 'saving', 'balance');
                showWithdraw();
            }}
            >Withdraw</button>
            <div id='withdraw-text'></div>
        </div>
    )
}

export default TransferSaving