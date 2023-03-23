import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage/Land'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" h-screen w-full">
      <LandingPage/>
     </div>
  )
}

export default App
