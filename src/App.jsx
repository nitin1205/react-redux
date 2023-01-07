import { useState } from 'react'
import CounterPage from './pages/CounterPage'
import './App.css'

function App() {

  const [initialCount, setInitialCount] = useState(10);
  return (
    <CounterPage initialCount={initialCount}/>
  )
}

export default App
