
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import Gallery1 from './pages/Gallery1'
import Gallery2 from './pages/Gallery2'
import Gallery3 from './pages/Gallery3'

function App() {
  

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery1" element={<Gallery1 />} />
      <Route path="/gallery2" element={<Gallery2 />} />
      <Route path="/gallery3" element={<Gallery3 />} />
    </Routes>

    <Footer />

    
    </>
  )
}

export default App
