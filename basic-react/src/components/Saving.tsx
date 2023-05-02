import React from 'react'

const Saving = () => {
  return (
    <div className='Input'>
        <p>Saving</p>
        <label htmlFor='saving-target'>Saving target:</label>
        <input
        type='text'
        name='saving-target'
        id='saving-target'
        />
        <button>Reset target</button>
        <div>Target: </div>
        <div>Current saving: </div>
        <div>Progress: </div>
    </div>
  )
}

export default Saving