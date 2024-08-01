//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { scroller, animateScroll } from 'react-scroll';
import Navbar from './assets/components/Navbar.jsx'
import Pages from './assets/pages/pages.js';

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
      <div className="App font-poppins">
        <Router>
          <Navbar />
          <div className="">
            <Routes>
              <Route path='/' element={<Pages.Home />} />
              <Route path='/project' element={<Pages.Project />} />
              <Route path='/aboutme' element={<Pages.AboutMe />} />
              <Route path='/contact' element={<Pages.Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
