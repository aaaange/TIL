import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App;