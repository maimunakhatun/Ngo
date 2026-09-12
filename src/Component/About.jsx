import react from 'react'
import MenuBar from './Menubar'
import img from '../assets/foodwaste.jpeg'
import Props from'./Prop'
import Footer from"./Footer"
const About = () => {
    return(
        <>
        <MenuBar/>
        <section className="hero">

<div className="hero-content">

<p className="section-small-title">

___ABOUT US

</p>

<h1>

Turning Food Waste <br /> into a Greener <br />

Tomorrow

</h1>

<p assName="hero-description">

NGO Waste is a non-profit organization working towards a cleaner environment and a sustainable future.
 We focus on waste management, recycling and creating awareness in communities to reduce the impact 
 of waste on our planet. We believe that small actions can make a dig difference -- and together ,
 we can build a cleaner, greener , and more sustainable tomorrow.

</p>

<button className="journey-btn">

Our Journey→

</button>

</div>
<div className="hero-image">

<img src={img} alt="Foodwaste " />

</div>

</section>





<div className="container">
  <div className="row">

    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <Props
        img="mission.jpeg"
        name="Our Mission"
        description="To reduce food waste and promote sustainable food practices by educating communities and 
        supporting local initiatives,and creating solutions for a healther planet."
      />
    </div>

    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <Props
        img="vision.jpeg"
        name="Our Vision"
        description="A world where no good food goes to waste and every community works together for a healthier planet."
      />
    </div>

    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <Props
        img="our value.jpeg"
        name="Our Goal"
        description="To create awareness and encourage people to take action against food waste and protect our 
        environment."
      />
    </div>

  </div>
</div>
    




<section className="impact-section">

  <div className="impact-intro">
    <p className="section-small-title">
      ---OUR IMPACT
    </p>

    <h2>
      Small Steps.
      <br />
      Big Changes.
    </h2>

    <p>
      Through our initiatives, we have been able to make a positive difference
      in many communities. Here's a glimpse of our impact so far.
    </p>
  </div>

  <div className="boxs">

    <div className="box">
      <span><i className="fa-solid fa-leaf"></i></span>
      <h2>500+</h2>
      <p>Kg Food Waste<br />Recycled</p>
    </div>

    <div className="box">
      <span><i className="fa-solid fa-users"></i></span>
      <h2>200+</h2>
      <p>People<br />Educated</p>
    </div>

    <div className="box">
      <span><i className="fa-solid fa-location-dot"></i></span>
      <h2>15+</h2>
      <p>Communities<br />Reached</p>
    </div>

    <div className="box">
      <span><i className="fa-solid fa-tree"></i></span>
      <h2>50+</h2>
      <p>Tree<br />Plantation</p>
    </div>

  </div>

</section>

<section className="team-section">
<div className="team-intro">
<p className="section-small-title">---OUR TEAM</p>
<h2>Meet the People<br/>Behind the Change</h2>
<p>We are a group of passionate individuals working together to create a cleaner, greener sustainable future.</p>
<button className="journey-btn">Join Our Team →</button>
</div>

<div className="team-container">

<div className="team-card">
<img src="/mandira.jpeg" alt="Maimuna Khatun" className="profile-image" />
<h3>Mandira Pobi</h3>
<p>Founder & President</p>
<div className="social"><span><i class="fa-brands fa-linkedin"></i></span>
<span><i class="fa-brands fa-facebook"></i></span><span><i class="fa-brands fa-square-threads"></i></span></div>
</div>

<div className="team-card">
<img src="/maimuna2.jpeg" alt="Arif Rahman" className="profile-image" />
<h3>Maimuna Khatun</h3>
<p>Program Manager</p>
<div className="social"><span><i class="fa-brands fa-linkedin"></i></span><span>
  <i class="fa-brands fa-facebook"></i></span><span><i class="fa-brands fa-square-threads"></i></span></div>
</div>

<div className="team-card">
<img src="/lata.jpeg" alt="Sadia Islam" className="profile-image" />
<h3>Lata Verma</h3>
<p>Volunteer Coordinator</p>
<div className="social"><span><i class="fa-brands fa-linkedin"></i></span>
<span><i class="fa-brands fa-facebook"></i></span><span><i class="fa-brands fa-square-threads"></i></span></div>
</div>

<div className="team-card">
<img src="/koyel2.jpeg" alt="koyel" className="profile-image" />
<h3>Koyel Kesh</h3>
<p>Community Outreach</p>
<div className="social"><span><i class="fa-brands fa-linkedin"></i></span><span><i class="fa-brands fa-facebook"></i></span><span><i class="fa-brands fa-square-threads"></i></span></div>
</div>

</div>
</section>

<section className="footer-upper">

  <div className="footer-upper-banner">

    <div className="footer-upper-left">
      <img src="/banner.jpeg" alt="banner" height="320px" />

      <p className="footer-upper-small">
        GET INVOLVED
      </p>

      <h2>
        Be a Part of the Change
      </h2>

      <p className="footer-upper-desc">
        Your support can help us create a cleaner and healthier planet
        for future generations.
      </p>

      <button className="footer-upper-btn">
        Donate Now →
      </button>
    </div>

    <div className="footer-upper-right" height={"350PX"}>
      <h3>
        A cleaner
        <br />
        tomorrow
        <br />
        starts with
        <br />
        you ♡
      </h3>
    </div>

  </div>

</section>




<Footer/>
</>
)
}
export default About
