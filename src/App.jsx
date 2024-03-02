//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar.jsx'
import Home from './assets/pages/Home.jsx'
import Home1 from './assets/pages/Home1.jsx'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="order-2 md:order-1">
          <Home />
          </div>
          <div className="order-1 md:order-2">
          <Home1 />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
