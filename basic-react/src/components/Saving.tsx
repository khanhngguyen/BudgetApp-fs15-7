import React, { useState } from 'react'

interface SavingProps {
    saving: number
}
const Saving = (props: SavingProps) => {
    const [target, setTarget] = useState('0');
    
    const handleResetTarget = () => {
        setTarget('0');
    }

    return (
        <div className='Input'>
            <div>Saving</div>
            <label htmlFor='saving-target'>Saving target:</label>
            <input
            type='text'
            name='saving-target'
            id='saving-target'
            value={target}
            onChange={e => setTarget(e.target.value)}
            />
            <button
            onClick={handleResetTarget}
            >Reset target</button>
            <div id='target'>Target: {target}</div>
            <div>Current saving: {props.saving}</div>
            <div>Progress: {(props.saving / parseInt(target)) * 100}%</div>
        </div>
    )
}

export default Saving