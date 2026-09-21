import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Call from './Component/Calling'
import Impact from './Component/ImpactPage'
import Contact from './Component/ContactUs'
import About from './Component/About'
import How from './Component/Howitworks'

import Donor from './Component/Donor'
import Member from './Component/Member'
import Volunteer from './Component/Volunteer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Call />} />
        <Route path="/Impact" element={<Impact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Howitworks" element={<How />} />

        {/* GET INVOLVED dropdown er jonno */}
        <Route path="/donor" element={<Donor />} />
        <Route path="/member" element={<Member />} />
        <Route path="/volunteer" element={<Volunteer />} />

      </Routes>
    </Router>
  )
}

export default App