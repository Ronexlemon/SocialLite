import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
import SinglePostComment from './Pages/SinglePostComment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage/>} />
        <Route path="/home" element={<LandPage/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/comment" element={<SinglePostComment/>} />
        
      </Routes>
    </Router>
  )
}

export default App
