import Input from './components/Input'
import './App.css'
import DecrypterInput from './components/DecrypterInput'
import CipherContextProvider from './context/cipherContextProvider'

function App() {
  return (
    <CipherContextProvider>
      <div className='main' >
        <div className='blockLeft'>
          <h2>Encrypter</h2>
          <Input />
        </div>
        <div className='blockRight' >
          <h2>Decrypter</h2>
          <DecrypterInput />
        </div>
      </div>
    </CipherContextProvider>
  )
}

export default App
