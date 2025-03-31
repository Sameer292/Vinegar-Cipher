import React, { useState } from 'react'
import DecrypterKeyInput from './DecrypterKeyInput';

function Input() {

    const [input, setInput] = useState('')
    function handleChange(e) {
        // console.log(e.target.value);

        setInput(e.target.value.toUpperCase())
        // console.log(e.target.value);

    }

    const handleKeydown = (e) => {
        if (e.key === ' ' || !isNaN(e.key)) {
            e.preventDefault();
            return;
        }
    }
    return (
        <div  >
            <input value={input} onChange={handleChange} onKeyDown={handleKeydown} style={{ width: '100%', height: '30px', marginBottom: '1rem' }} type="text" placeholder='Enter your chipher' />
            <DecrypterKeyInput input={input} setInput={setInput} />
        </div>
    )
}

export default Input