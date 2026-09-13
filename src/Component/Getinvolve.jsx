import React from 'react'
import MenuBar from './Menubar'
import Footer from"./Footer"
import Getarray from'../Component/Getarray'
const GetInvolved = () => {
  return (
    <><MenuBar/>
  
<div className="container-fluid getinvolve-hero">
  <div className="row align-items-center">
    
    {/* LEFT TEXT */}
    <div className="col-md-6 get-hero-left">
      <h6 className="small-head">GET INVOLVED</h6>
      <h1 className="big-head">Small Actions<br/>Make a Big Impact</h1>
      <p className="hero-para">
        Join us in the fight against food waste. There are many ways you can help — donate, 
        volunteer, partner or simply spread the word. Together we can create a healthier planet 
        and a hunger-free community.
      </p>
      <h4 className="hero-tagline">Be the change. Get involved!</h4>
    </div>

    {/* RIGHT IMAGE */}
    <div className="col-md-6 get-hero-right">
      <div className="img-bg-shape">
        <img 
          src="/good.jpeg" 
          alt="Good Food Deserves No Waste" 
          className="hero-food-img"
        />
      </div>
    </div>

  </div>
</div>
   <Getarray/>
   <div className="more-container">
  <div className="more-left">
    <img src="/vol.jpeg" alt="volunteer" />
  </div>

  <div className="more-right">
    <p className="more-small">GET INVOLVED IN OTHER WAYS</p>
    <h2 className="more-title">More Ways to Help</h2>
    <div className="more-line"></div>

    <div className="more-grid">
      <div className="more-item">
        <div className="more-icon">♥️</div>
        <div className="more-text">
          <h5>Fundraise</h5>
          <p>Start a campaign or support our ongoing efforts.</p>
        </div>
      </div>

      <div className="more-item">
        <div className="more-icon">◫</div>
        <div className="more-text">
          <h5>Educate & Advocate</h5>
          <p>Help raise awareness about food waste and hunger.</p>
        </div>
      </div>

      <div className="more-item">
        <div className="more-icon">▦</div>
        <div className="more-text">
          <h5>Host a Food Drive</h5>
          <p>Organize a food collection at your school, workplace or community.</p>
        </div>
      </div>

      <div className="more-item">
        <div className="more-icon">☺</div>
        <div className="more-text">
          <h5>Join Our Community</h5>
          <p>Be part of a growing network of changemakers.</p>
        </div>
      </div>
    </div>
  </div>
</div>
     
      <Footer/>
    </>
  )
}

export default GetInvolved
