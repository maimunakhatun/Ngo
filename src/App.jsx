import { useState } from 'react'
import './App.css'
// import MenuBar from './Component/Menubar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Call from'./Component/Calling'
<<<<<<< HEAD
import Impact from './Component/ImpactPage'
import Contact from './Component/ContactUs'
// import Home from './Component/Homepage'

=======
// import Home from './Component/Homepage'
import About from './Component/About'
import How from "./Component/Howitworks"
import GetInvolved from "./Component/Getinvolve"
>>>>>>> 95749df661b9b8b7477d17d6b170e3498854cba0


function App() {

  return (
    <>
    
      <Router>

        <Routes>
          <Route path='/' element={<Call/>}></Route>
<<<<<<< HEAD
          {/* <Route path='/Home' element={<Home/>}></Route> */}
          <Route path='/Impact' element={<Impact/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
=======
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Howitworks' element={<How/>}></Route>
           <Route path='/Getinvolve' element={<GetInvolved/>}></Route>
>>>>>>> 95749df661b9b8b7477d17d6b170e3498854cba0
        </Routes>
      </Router>

    </>
  )
}

export default App
 