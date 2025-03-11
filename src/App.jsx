import React from 'react'
import Header from '../components/Header'
import {Routes,Route} from 'react-router-dom'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'

function App() {
  return (
    
   <>
    <div className='min-h-screen'>
    <Header/>
    <Routes>
      <Route path='' element={< Home />}/>
        <Route path='About' element={< About />}/>
        <Route path='Contact' element={< Contact />}/>
        <Route path='Projects' element={< Projects />}/>
      </Routes>
      <Footer/>
    </div>
   </>
  )
}

export default App
