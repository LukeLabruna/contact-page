import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Contairner from './components/Container/Contairner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Contairner />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
