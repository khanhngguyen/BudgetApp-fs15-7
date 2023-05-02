import React, { useState } from 'react'

interface TransferSavingProps {
    balance: number
    saving: number
    handleBalance: (input: string, from: string, to: string) => void
}

const TransferSaving = (props: TransferSavingProps) => {
    const [transfer, setTransfer] = useState('0');
    const [withdraw, setWithdraw] = useState('0');
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
            }}
            >Transfer</button>
            <div>You've transferred </div>
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
            }}
            >Withdraw</button>
            <div>You've withdrawn </div>
        </div>
    )
}

export default TransferSaving