import React, { useState } from 'react'
import DecrypterKeyInput from './DecrypterKeyInput';
import { useContext } from 'react';
import cipherContext from '../context/cipherContext';

function Input() {
const {cipherText  } = useContext(cipherContext)
    const [input, setInput] = useState('')
    function handleChange(e) {

        setInput(e.target.value.toUpperCase())

    }
    const handleKeydown = (e) => {
        if (e.key === ' ' || !isNaN(e.key)) {
            e.preventDefault();
            return;
        }
    }
    return (
        <div  >
            <input value={input ? input : cipherText.toUpperCase() } onChange={handleChange}  className='input' onKeyDown={handleKeydown} type="text" placeholder='Enter your chipher' />
            <DecrypterKeyInput input={input ? input : cipherText } setInput={setInput} />
        </div>
    )
}

export default Input