import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EstadoPrincipal } from './Componentes-Lista/EstadoPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EstadoPrincipal/>
    </>
  )
}

export default App
