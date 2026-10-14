import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const MenuBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container-fluid header-menu">
      <div className="row">

        {/* Logo */}
        <div className="col-md-2 col-lg-2">
          <div className="logo mt-2">
            <img
              src={Logo}
              alt="Logo"
              height="70px"
              width="90px"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="col-md-8 col-lg-8">
          <div className="menu-area">
            <nav>
              <ul>

                {/* Home */}
                <li>
                  <NavLink to="/" className="menutab">
                    HOME
                  </NavLink>
                </li>

                {/* About */}
                <li>
                  <NavLink to="/About" className="menutab">
                    ABOUT US
                  </NavLink>
                </li>

                {/* How It Works */}
                <li>
                  <NavLink to="/Howitworks" className="menutab">
                    HOW IT WORKS
                  </NavLink>
                </li>

                {/* Impact */}
                <li>
                  <NavLink to="/Impact" className="menutab">
                    IMPACT
                  </NavLink>
                </li>

                {/* Get Involved Dropdown */}
                <li
                  className="dropdown-parent"
                  style={{ position: "relative" }}
                >
                  <span
                    className="menutab"
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    GET INVOLVED ▾
                  </span>

                  {show && (
                    <div className="dropdown-menu">

                      {/* Donor */}
                      <Link
                        to="/donor"
                        className="dropdown-item"
                        onClick={() => setShow(false)}
                      >
                        As a Donor
                      </Link>

                      {/* Member */}
                      <Link
                        to="/member"
                        className="dropdown-item"
                        onClick={() => setShow(false)}
                      >
                        As a Member
                      </Link>

                      {/* Volunteer */}
                      <Link
                        to="/volunteer"
                        className="dropdown-item"
                        onClick={() => setShow(false)}
                      >
                        As a Volunteer
                      </Link>

                      {/* Admin */}
                      <Link
                        to="/admin"
                        className="dropdown-item"
                        onClick={() => setShow(false)}
                      >
                        As an Admin
                      </Link>

                    </div>
                  )}
                </li>

                {/* Contact */}
                <li>
                  <NavLink to="/Contact" className="menutab">
                    CONTACT US
                  </NavLink>
                </li>

              </ul>
            </nav>
          </div>
        </div>

        {/* Donate Button */}
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