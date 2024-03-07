//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { scroller, animateScroll } from 'react-scroll';
import Navbar from './assets/components/Navbar.jsx'
import Home from './assets/pages/Home.jsx'
import Project from './assets/pages/Project.jsx'
import Aboutme from './assets/pages/Aboutme.jsx'
import Contact from './assets/pages/Contact.jsx'

function App() {
  function scrollToSection() {
    scroller.scrollTo('section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <div className="">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/project' element={<Project />} />
              <Route exact path='/aboutme' element={<Aboutme />} />
              <Route exact path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
