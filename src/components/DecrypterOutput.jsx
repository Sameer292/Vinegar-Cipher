import React from 'react'
import { useContext } from 'react'
import cipherContext from '../context/cipherContext'

const DecrypterOutput = () => {

    const { decryptedText } = useContext(cipherContext)

    return (
        decryptedText && <div>
          <p> {`Decrypted message is: ${decryptedText.toLowerCase()}`} </p>
        </div>
      )
}

export default DecrypterOutput