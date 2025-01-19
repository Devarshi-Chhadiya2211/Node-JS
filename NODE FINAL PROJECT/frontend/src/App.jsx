import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
    <MainRoutes/>
  </>
  )
}

export default App
