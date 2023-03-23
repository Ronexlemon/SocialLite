import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage/>} />
        <Route path="/home" element={<LandPage/>} />
        <Route path="/main" element={<Main/>} />
        
      </Routes>
    </Router>
  )
}

export default App
