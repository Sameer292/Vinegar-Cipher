import Input from './components/Input'
import './App.css'
import DecrypterInput from './components/DecrypterInput'
import CipherContextProvider from './context/cipherContextProvider'

function App() {
  return (
    <CipherContextProvider>
    <div style={{ width: '100%', height: '35rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <div style={{ border: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', height: '100%' }}>
        <h2>Encrypter</h2>
        <Input />
      </div>
      <div style={{ border: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', height: '100%' }} >
        <h2>Decrypter</h2>
        <DecrypterInput />
      </div>
    </div>
    </CipherContextProvider>
  )
}

export default App
