import React from 'react'

const TransferSaving = () => {
    return (
        <div className='Input'>
            <label htmlFor='saving-transfer'>Transfer to saving amount: </label>
            <input
            type='text'
            name='saving-transger'
            id='saving-transfer'
            />
            <button>Transfer</button>
            <div>You've transferred </div>
        </div>
    )
}

export default TransferSaving