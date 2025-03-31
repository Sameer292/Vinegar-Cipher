import React from 'react'
import { useContext } from 'react'
import cipherContext from '../context/cipherContext'

function Output() {
  const { encryptedText, encryptionKey, setCipherText, setCipherKey } = useContext(cipherContext)
  function handleClick() {
    setCipherText(encryptedText);
    setCipherKey(encryptionKey)
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
