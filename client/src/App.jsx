import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Call from './Component/Calling'
import Impact from './Component/ImpactPage'
import Contact from './Component/ContactUs'
import About from './Component/About'
import How from './Component/Howitworks'

import Donor from './Component/Donor'
import Member from './Component/Member'
import Volunteer from './Component/Volunteer'

import Admin from './Component/Admin'


function App() {

  return (

    <Router>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Call />}
        />


        {/* NORMAL PAGES */}

        <Route
          path="/Impact"
          element={<Impact />}
        />

        <Route
          path="/Contact"
          element={<Contact />}
        />

        <Route
          path="/About"
          element={<About />}
        />

        <Route
          path="/Howitworks"
          element={<How />}
        />


        {/* GET INVOLVED */}

        <Route
          path="/donor"
          element={<Donor />}
        />

        <Route
          path="/member"
          element={<Member />}
        />

        <Route
          path="/volunteer"
          element={<Volunteer />}
        />


        {/* ADMIN */}

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/admin/donations"
          element={<Admin />}
        />

        <Route
          path="/admin/members"
          element={<Admin />}
        />

        <Route
          path="/admin/volunteers"
          element={<Admin />}
        />

        <Route
          path="/admin/users"
          element={<Admin />}
        />

        <Route
          path="/admin/food-distribution"
          element={<Admin />}
        />

        <Route
          path="/admin/reports"
          element={<Admin />}
        />

        <Route
          path="/admin/settings"
          element={<Admin />}
        />

      </Routes>

    </Router>

  )

}

export default App