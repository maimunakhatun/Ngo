import react from "react"
import Arraylist from "./Array"
import MenuBar from './Menubar'
import Footer from"./Footer"
const How = () => {
    return(
        <> 
        <MenuBar/><div className="bbb">
    <div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <div className="first-heading">
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

  
         <Arraylist/>
         </div>
       
<div className="container-fluid my-5">
  <div className="row">
    <div className="col-12">

      <div className="veg-upper">
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

              <button className="veg-btn">
                Get Involved →
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-3">
            <div className="veg-list">
              <div className="list-item">
                <span>🍃</span> Donate Food
              </div>

              <div className="list-item">
                <span>👥</span> Volunteer
              </div>

              <div className="list-item">
                <span>♡</span> Support Us
              </div>
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