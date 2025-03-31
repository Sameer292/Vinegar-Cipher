import React from 'react'
import { useContext } from 'react'
import cipherContext from '../context/cipherContext'

function Output() {

  const {encryptedText } = useContext(cipherContext)

  function handleClick(){

  }

  return (
    encryptedText && <div>
      <p> {`Encrypted message is: ${encryptedText.toUpperCase()}`} </p>
      <button onClick={handleClick}>
        Decrypt this cipher
      </button>
    </div>
  )
}

export default Output
