import react, { useState, useEffect, useRef } from "react"
import ProductArray from './ArrayProduct'
import MenuBar from './Menubar'
import Footer from"./Footer"
import { Link } from "react-router-dom"
const How = () => {
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

    return(
        <> 
        <MenuBar/><div className="bbb">
    <div className="container-fluid descrip">
  <div className="row">
    <div className="col-12">
      <div className="first-heading descrip">
        <span className="upper">HOW IT WORKS</span>

        <h1 className="heading">
          From Surplus to <span>Second Chance</span>
        </h1>

        <p className="subheading">
          We connect surplus food with people in need and reduce food waste
          through a simple, impactful process.
        </p>
      </div>
    </div>
  </div>
</div>

  
         <ProductArray/>
         </div>
       
<div className="container-fluid my-5">
  <div className="row">
    <div className="col-12">

      <div className="veg-upper descrip">
        <div className="row align-items-center">

          <div className="col-lg-3 col-md-4">
            <img
              src="/veg.jpeg"
              alt="veg box"
              className="veg-main-img"
              height={"100px"}
            />
          </div>

          <div className="col-lg-6 col-md-5">
            <div className="veg-text">
              <h2>Be a Part of the Change</h2>

              <p>
                Every meal saved makes a difference. Join us in fighting food
                waste and supporting our community.
              </p>

              <button ref={dropdownRef} className="veg-btn" style={{ position: 'relative' }}>
                                <span className="menutab"
                                  onClick={() => setShow(!show)}
                                  style={{ cursor: 'pointer' }}>
                                  Get Involved →
                                </span>
              
                                {show && (
                                  <div className="dropdown-menu">
                                    <Link to="/donor" className="dropdown-item" onClick={() => setShow(false)}>As a Donor</Link>
                                    <Link to="/member" className="dropdown-item" onClick={() => setShow(false)}>As a Member</Link>
                                    <Link to="/volunteer" className="dropdown-item" onClick={() => setShow(false)}>As a Volunteer</Link>
                                  </div>
                                )}
                
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-3">
            <div className="veg-list">
              <Link to="/donor" style={{textDecoration:"none"}}>
              <div className="list-item">
                <span>🍃</span> Donate Food
              </div>
              </Link>

              <Link to="/volunteer" style={{textDecoration:"none"}}>
              <div className="list-item">
                <span>👥</span> Volunteer
              </div>
              </Link>

              <Link to="/member" style={{textDecoration:"none"}}>
              <div className="list-item">
                <span>♡</span> Support Us
              </div>
              </Link>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>

<Footer/>
        </>
    )
}
export default How