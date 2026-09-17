import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const MenuBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container-fluid header-menu">
      <div className="row">
        <div className="col-md-2 col-lg-2">
          <div className="logo mt-2">
            <img src={Logo} alt="Logo" height="70px" width="90px" />
          </div>
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="menu-area">
            <nav>
              <ul>
                <li><NavLink to="/" className="menutab">HOME</NavLink></li>
                <li><NavLink to="/About" className="menutab">ABOUT US</NavLink></li>
                <li><NavLink to="/Howitworks" className="menutab">HOW IT WORKS</NavLink></li>
                <li><NavLink to="/Impact" className="menutab">IMPACT</NavLink></li>

                <li className="dropdown-parent" style={{position: 'relative'}}>
                  <span className="menutab" 
                        onClick={() => setShow(!show)} 
                        style={{cursor: 'pointer'}}>
                    GET INVOLVED ▾
                  </span>

                  {show && (
                    <div className="dropdown-menu">
                      <Link to="/donor" className="dropdown-item" onClick={() => setShow(false)}>As a Donor</Link>
                      <Link to="/member" className="dropdown-item" onClick={() => setShow(false)}>As a Member</Link>
                      <Link to="/volunteer" className="dropdown-item" onClick={() => setShow(false)}>As a Volunteer</Link>
                    </div>
                  )}
                </li>

                <li><NavLink to="/Contact" className="menutab">CONTACT US</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;