import React from 'react'
import { useContext } from 'react'
import cipherContext from '../context/cipherContext'

const ResetBtn = ({setInput, type}) => {

  const {setEncryptionKey, setEncryptedText, setDecryptedText, setDecryptionKey} = useContext(cipherContext);


    const handleClick = () => {
      setInput('')
      if(type == 'decrypter') {
        setDecryptionKey('')
        setDecryptedText('')
      }else{

        // setInput('')
        setEncryptionKey('')
        setEncryptedText('')
        // console.log('Cleared everything');
      }
        
        
    }


  return (
    <button onClick={handleClick} >
        Reset
    </button>
  )
}

export default ResetBtn