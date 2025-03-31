import { useState } from "react";
import cipherContext from "./cipherContext";

const CipherContextProvider = ({ children }) => {
    const [encryptedText, setEncryptedText] = useState('')
    const [decryptedText, setDecryptedText] = useState('')
    const [encryptionKey, setEncryptionKey] = useState('')
    const [decryptionKey, setDecryptionKey] = useState('')
    const [cipherText, setCipherText] = useState('')
    const [cipherKey, setCipherKey] = useState('')
    return (
        <cipherContext.Provider value={{cipherText, setCipherText,cipherKey, setCipherKey, encryptedText, setEncryptedText, decryptedText, setDecryptedText, encryptionKey, setEncryptionKey, decryptionKey, setDecryptionKey }}>
            {children}
        </cipherContext.Provider>
    )
};

export default CipherContextProvider;