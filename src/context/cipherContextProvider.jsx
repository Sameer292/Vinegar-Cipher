import { useState } from "react";
import cipherContext from "./cipherContext";

const CipherContextProvider = ({ children }) => {
    const [encryptedText, setEncryptedText] = useState('')
    const [decryptedText, setDecryptedText] = useState('')
    const [encryptionKey, setEncryptionKey] = useState('')
    const [decryptionKey, setDecryptionKey] = useState('')
    return (
        <cipherContext.Provider value={{ encryptedText, setEncryptedText, decryptedText, setDecryptedText, encryptionKey, setEncryptionKey, decryptionKey, setDecryptionKey }}>
            {children}
        </cipherContext.Provider>
    )
};

export default CipherContextProvider;