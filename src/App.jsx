import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Meals from './pages/Meals'
import Home from './pages/Home'
import Tips from './pages/Tips'
import About from './pages/About'

function App() {
  return (
    <div className='wrap'>
      <Navbar />
      <main className="comtainer">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} MyPlate</small>
      </footer>
    </div>
  )
}

export default App
