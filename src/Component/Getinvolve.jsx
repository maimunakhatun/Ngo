import React from 'react'
import MenuBar from './Menubar'
import Footer from"./Footer"

const GetInvolved = () => {
  return (
    <><MenuBar/>
     
      <div className="getinvolve-hero-section">
        <div className="container">
          <div className="row align-items-center">

              <span className="getinvolve-small-head">
                GET INVOLVED
              </span>

              <h1 className="getinvolve-main-title">
                Small Actions<br />Make a Big Impact
              </h1>

              <p className="getinvolve-desc">
                Join us in the fight against food waste. There are many ways
                you can help — donate, volunteer, partner or simply spread the
                word. Together we can create a healthier planet and a
                hunger-free community.
              </p>

              <h6 className="getinvolve-tagline">
                Be the change. Get involved!
              </h6>
            </div>

    
            <div className="col-lg-6 text-center">
              <div className="getinvolve-img-bg">
                <img
                  src="/hero-food-box.jpg"
                  alt="Good Food Deserves No Waste"
                  className="getinvolve-hero-img"
                />
              </div>
            </div>

          </div>
        </div>
   
     
      <Footer/>
    </>
  )
}

export default GetInvolved
