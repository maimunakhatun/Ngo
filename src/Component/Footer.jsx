

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h5><i class="fa-brands fa-pagelines"></i> NGO WASTE FOOD</h5>
            <p>Cleaner tomorrow | Brighter Future. We rescue surplus food, support communities and work towards a sustainable future.</p>
          </div>
          <div className="col-lg-3">
            <h6>Quick Links</h6>

            <Link to="/" style={{textDecoration:"none"}}><p>Home</p></Link>
            <Link to="/About" style={{textDecoration:"none"}}><p>About</p></Link>
            <Link to="/Howitworks" style={{textDecoration:"none"}}><p>How It Works</p></Link>
            <Link to="/Impact" style={{textDecoration:"none"}}><p>Impact</p></Link>
            <p>Get Involved</p>
            <Link to="/Contact" style={{textDecoration:"none"}}><p>Contact</p></Link>
          </div>
          
          <div className="col-lg-3">
            <h6>Get Involved</h6>
            <Link to="/donor" style={{textDecoration:"none"}}> <p> <i class="fa-solid fa-hand-holding-heart"></i> Donate Food</p></Link> 
            <Link to="/volunteer" style={{textDecoration:"none"}}><p><i class="fa-solid fa-users"></i>    Volunteer</p></Link>
            <Link to="/member" style={{textDecoration:"none"}}><p><i class="fa-solid fa-users"> </i>  Partner with us</p></Link>
            <p><i class="fa-solid fa-leaf"></i>  Spread the world</p>
          </div>
          <div className="col-lg-3">
            <h6>Contact Us</h6>
            <p><i class="fa-solid fa-phone"></i>  6297770824</p><p>    <i class="fa-regular fa-envelope"></i> info@ngowastefood.org</p><p>    <i class="fa-solid fa-location-dot"></i>  Durgapur, West Bengal</p>
          </div>
          <div className="footer-col">
      <p><b>Follow Us</b></p>
      <p><i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-square-threads"></i></p>
    </div>
        </div>
        <hr />
        <p className="text-center"> 2026 NGO WasteFood. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer