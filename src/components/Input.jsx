import React, { useState } from 'react'
import KeyInput from './KeyInput';

function Input() {
    const [input, setInput] = useState('')
    function handleChange(e) {
        setInput(e.target.value.toLowerCase())
    }
    const handleKeydown = (e) => {
        if (e.key === ' ' || !isNaN(e.key)) {
            e.preventDefault();
            return;
        }
    }
    return (
        <div  >
            <input value={input} onChange={handleChange} onKeyDown={handleKeydown} className='input' type="text" placeholder='Enter your message' />
            <KeyInput input={input} setInput={setInput} />
        </div>
    )
}

export default Input