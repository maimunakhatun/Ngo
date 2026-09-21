
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const MenuBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container-fluid header-menu">
      <div className="row align-items-center">

        
        <div className="col-md-2 col-lg-2 col-sm-12">
          <div className="logo mt-2">
            <Link to="/">
              <img
                src={Logo}
                alt="NGO Logo"
                height="70"
                width="90"
              />
            </Link>
          </div>
        </div>

        
        <div className="col-md-8 col-lg-8 col-sm-12">
          <div className="menu-area">
            <nav>
              <ul>

               
                <li>
                  <NavLink
                    to="/"
                    className="menutab"
                  >
                    HOME
                  </NavLink>
                </li>

                
                <li>
                  <NavLink
                    to="/About"
                    className="menutab"
                  >
                    ABOUT US
                  </NavLink>
                </li>

                
                <li>
                  <NavLink
                    to="/Howitworks"
                    className="menutab"
                  >
                    HOW IT WORKS
                  </NavLink>
                </li>

                
                <li>
                  <NavLink
                    to="/Impact"
                    className="menutab"
                  >
                    IMPACT
                  </NavLink>
                </li>

               
                <li
                  className="dropdown-parent"
                  style={{ position: "relative" }}
                >
                  <button
                    type="button"
                    className="menutab dropdown-toggle-btn"
                    onClick={() => setShow(!show)}
                  >
                    GET INVOLVED <span>▾</span>
                  </button>

                  {show && (
                    <div className="dropdown-menu-custom">

                      {/* DONOR */}
                      <Link
                        to="/donor"
                        className="dropdown-item-custom"
                        onClick={() => setShow(false)}
                      >
                        As a Donor
                      </Link>

                      
                      <Link
                        to="/member"
                        className="dropdown-item-custom"
                        onClick={() => setShow(false)}
                      >
                        As a Member
                      </Link>

                      
                      <Link
                        to="/volunteer"
                        className="dropdown-item-custom"
                        onClick={() => setShow(false)}
                      >
                        As a Volunteer
                      </Link>

                    </div>
                  )}
                </li>

               
                <li>
                  <NavLink
                    to="/Contact"
                    className="menutab"
                  >
                    CONTACT US
                  </NavLink>
                </li>

              </ul>
           
            </nav>
          </div>
        </div>

        
        <div className="col-md-2 col-lg-2 col-sm-12 top-right">
          <Link to="/donor">
            <button type="button" className="btn">
              Donate <i className="fa-regular fa-heart"></i>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MenuBar;
