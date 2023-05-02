import React from 'react'

const Expense = () => {
  return (
    <div className='Input'>
        <label htmlFor='expense-source'>Expense source:</label>
        <select name='expense-source' id='expense-source'>
            <option value='salary'>Rent</option>
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
        />
        <label htmlFor='expense-amount'>Amount:</label>
        <input
        type='text'
        name='expense-amount'
        id='expense-amount'
        />
        <label htmlFor='expense-date'>Date of expense</label>
        <input
        type='date'
        name='expense-date'
        id='expense-date'
        />
        <button>Add expense</button>
    </div>
  )
}

export default Expense