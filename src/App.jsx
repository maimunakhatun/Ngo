import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Call from './Component/Calling'
import Impact from './Component/ImpactPage'
import Contact from './Component/ContactUs'
import About from './Component/About'
import How from './Component/Howitworks'
import GetInvolved from './Component/Getinvolve'

// import Home from './Component/Homepage'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Call />} />

        {/* <Route path="/Home" element={<Home />} /> */}

        <Route path="/Impact" element={<Impact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Howitworks" element={<How />} />
        <Route path="/Getinvolve" element={<GetInvolved />} />

      </Routes>
    </Router>
  )
}

export default App