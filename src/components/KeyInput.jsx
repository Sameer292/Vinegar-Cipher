import React from 'react'
import { useContext } from 'react';
import cipherContext from '../context/cipherContext';
import Output from './Output';
import ResetBtn from './ResetBtn';

function KeyInput({ input,setInput }) {

    const {setEncryptedText,encryptionKey, setEncryptionKey } = useContext(cipherContext);

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



    function handleChange(e) {
        setEncryptionKey(e.target.value)
    }

    function handleSubmit() {
        setEncryptedText('')
        for (let i = 0; i < input.length; i++) {
            const index = (alphabet.indexOf(input[i]) + alphabet.indexOf(encryptionKey[i % encryptionKey.length])) % 26
            setEncryptedText(oldmsg => oldmsg + alphabet[index])
        }
    }




    return (
        <div style={{ marginBottom: '20px', width: '100%' }} >
            <input type="text" value={encryptionKey} onChange={handleChange}  style={{ width: '100%', height: '30px', marginBottom: '1rem' }} placeholder='Enter your key for the cipher' />
            <br />
            <button onClick={handleSubmit}  style={{marginRight: '10px'}} >Submit</button>
            <ResetBtn setInput={setInput} />
            <Output/>
        </div>
    )
}

export default KeyInput
