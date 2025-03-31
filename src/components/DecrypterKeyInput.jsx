import React from 'react'
import { useContext } from 'react';
import cipherContext from '../context/cipherContext';
import ResetBtn from './ResetBtn';
import DecrypterOutput from './DecrypterOutput';

function DecrypterKeyInput({ input, setInput }) {

    const { setDecryptedText, decryptionKey, setDecryptionKey, cipherKey } = useContext(cipherContext);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    function handleChange(e) {
        setDecryptionKey(e.target.value)
    }
    function handleSubmit() {
        setDecryptedText('')
        input = input.toLowerCase()
        for (let i = 0; i < input.length; i++) {
            let index = (alphabet.indexOf(input[i]) - alphabet.indexOf(decryptionKey ? decryptionKey[i % decryptionKey.length] : cipherKey[i % cipherKey.length])) % 26
            index < 0 ? index += 26 : index
            setDecryptedText(oldmsg => oldmsg + alphabet[index])
        }
    }
    return (
        <div style={{ marginBottom: '20px', width: '100%' }} >
            <input type="text" value={decryptionKey ? decryptionKey : cipherKey} onChange={handleChange} className='input' placeholder='Enter your key for the cipher' />
            <br />
            <button onClick={handleSubmit} style={{ marginRight: '10px' }} >Submit</button>
            <ResetBtn setInput={setInput} type='decrypter' />
            <DecrypterOutput />
        </div>
    )
}
export default DecrypterKeyInput
