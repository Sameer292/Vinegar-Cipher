import React from 'react'
import { useContext } from 'react'
import cipherContext from '../context/cipherContext'

const ResetBtn = ({setInput, type}) => {
  const {setEncryptionKey, setEncryptedText, setDecryptedText, setDecryptionKey, setCipherText, setCipherKey} = useContext(cipherContext);
    const handleClick = () => {
      setInput('')
      if(type == 'decrypter') {
        setCipherKey('')
        setCipherText('')
        setDecryptionKey('')
        setDecryptedText('')
      }else{
        setEncryptionKey('')
        setEncryptedText('')
      }        
    }
  return (
    <button onClick={handleClick} >
        Reset
    </button>
  )
}

export default ResetBtn