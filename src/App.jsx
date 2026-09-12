import { useState } from 'react'
import './App.css'
// import MenuBar from './Component/Menubar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Call from'./Component/Calling'
// import Home from './Component/Homepage'
import About from './Component/About'
import How from "./Component/Howitworks"
import GetInvolved from "./Component/Getinvolve"


function App() {

  return (
    <>
    
      <Router>

        <Routes>
          <Route path='/' element={<Call/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Howitworks' element={<How/>}></Route>
           <Route path='/Getinvolve' element={<GetInvolved/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
 