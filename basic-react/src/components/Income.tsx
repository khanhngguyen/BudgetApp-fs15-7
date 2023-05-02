import React from 'react'

const Income = () => {
  return (
    <div className='Input'>
        <label htmlFor='income-source'>Income source:</label>
        <select name='income-source' id='income-source'>
            <option value='salary'>Salary</option>
            <option value='other'>Other</option>
        </select>
        <label htmlFor='income-amount'>Amount:</label>
        <input
        type='text'
        name='income-amount'
        id='income-amount'
        />
        <label htmlFor='income-date'>Date of income</label>
        <input
        type='date'
        name='income-date'
        id='income-date'
        />
        <button>Add income</button>
    </div>
  )
}

export default Income