import React, { useState } from 'react'
import KeyInput from './KeyInput';

function Input() {
    // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const [input, setInput] = useState('')
    function handleChange(e) {
        console.log(e.target.value);

        setInput(e.target.value.toLowerCase())
        console.log(e.target.value);

    }

    const handleKeydown = (e) => {
        if (e.key === ' ' || !isNaN(e.key))  {
            e.preventDefault();
            return;
        }
    }


    return (
        <div  >
            <input value={input} onChange={handleChange}  onKeyDown={handleKeydown} style={{ width: '100%', height: '30px', marginBottom: '1rem' }} type="text" placeholder='Enter your message' />
            <KeyInput input={input} setInput={setInput} />
        </div>
    )
}

export default Input