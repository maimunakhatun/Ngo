
import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const MenuBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="container-fluid header-menu"
      style={{
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="row align-items-center" style={{ padding: "10px 0" }}>

        {/* Logo */}
        <div className="col-6 col-md-2 col-lg-2">
          <div className="logo">
            <img src={Logo} alt="Logo" height="70px" width="90px" />
          </div>
        </div>

        {/* Hamburger - only mobile */}
        <div className="col-6 d-md-none text-end">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "32px",
              color: "#0f5d30",
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`col-12 col-md-8 col-lg-8 ${
            mobileOpen ? "d-block" : "d-none d-md-block"
          }`}
        >
          <div className="menu-area">
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className="menutab"
                    onClick={() => setMobileOpen(false)}
                  >
                    HOME
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/About"
                    className="menutab"
                    onClick={() => setMobileOpen(false)}
                  >
                    ABOUT US
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Howitworks"
                    className="menutab"
                    onClick={() => setMobileOpen(false)}
                  >
                    HOW IT WORKS
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Impact"
                    className="menutab"
                    onClick={() => setMobileOpen(false)}
                  >
                    IMPACT
                  </NavLink>
                </li>

                {/* Get Involved Dropdown */}
                <li
                  ref={dropdownRef}
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
                    <div
                      className="dropdown-menu show"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "white",
                        minWidth: "180px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        zIndex: 1001,
                      }}
                    >
                      <Link
                        to="/donor"
                        className="dropdown-item"
                        onClick={() => {
                          setShow(false);
                          setMobileOpen(false);
                        }}
                      >
                        As a Donor
                      </Link>

                      <Link
                        to="/member"
                        className="dropdown-item"
                        onClick={() => {
                          setShow(false);
                          setMobileOpen(false);
                        }}
                      >
                        As a Member
                      </Link>

                      <Link
                        to="/volunteer"
                        className="dropdown-item"
                        onClick={() => {
                          setShow(false);
                          setMobileOpen(false);
                        }}
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
                    onClick={() => setMobileOpen(false)}
                  >
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

      {/* Mobile CSS */}
      <style>{`
        @media (max-width: 768px) {
          .menu-area ul {
            flex-direction: column !important;
            gap: 15px !important;
            padding: 20px 10px !important;
            background: white;
            align-items: flex-start !important;
          }

          .header-menu {
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .dropdown-menu {
            position: static !important;
            box-shadow: none !important;
            margin-top: 10px;
          }
        }

        .menu-area ul {
          display: flex;
          list-style: none;
          gap: 25px;
          align-items: center;
          margin: 0;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default MenuBar;
