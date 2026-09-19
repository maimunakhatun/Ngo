import React from "react";
import MenuBar from "./Menubar";
import image1 from '../assets/cntct1.png'
import Footer from "./Footer";


const Contact = () => {
    return (
        <>
            <MenuBar />

            <div className="container-fluid descrip">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 cntct1">
                            <h3>Contact us</h3>
                            <h1>Get in Touch</h1>
                            <h2>We'd love to hear from you!</h2>
                            <p>Have a question, suggestion, or want to get involved?<br />Reach out to us. Together, we can reduce food waste and create a healthier, happier community.</p>
                            <h4>Let's make an impact - together!</h4>

                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <img src={image1} alt="Contact1" height={"350px"} width={"750px"} />
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mb-5">
                <div className="row g-4">

                    {/* Contact Details */}
                    <div className="col-md-7 col-lg-7 col-sm-12 cntct21">
                        <h3>Our contact information</h3>
                        <h1>We're Here to Help</h1>
                              
                            <div className="row g-4">

                                {/* Phone */}
                                <div className="col-md-6">
                                    <div className="contact-card green-card">
                                        <div className="contact-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h5>PHONE</h5>
                                            <p>+91 7679024968, +91 6297770824</p>
                                            <p>(Mon – Fri, 9 AM – 6 PM)</p>
                                        </div>
                                    </div>
                                </div>


                                {/* Email */}
                                <div className="col-md-6">
                                    <div className="contact-card green-card">
                                        <div className="contact-icon">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h5>EMAIL</h5>
                                            <p>info@nowastefood.org</p>
                                            <p>We usually reply within 24 hours.</p>
                                        </div>

                                    </div>
                                </div>


                                {/* Location */}
                                <div className="col-md-6">
                                    <div className="contact-card yellow-card">
                                        <div className="contact-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h5>OUR LOCATION</h5>
                                            <p>Kabi Nazrul, A Zone</p>
                                            <p>City Center, Durgapur – 713191</p>
                                            <p>West Bengal, India</p>
                                        </div>

                                    </div>
                                </div>


                                {/* Follow Us */}
                                <div className="col-md-6">
                                    <div className="contact-card green-card follow-card">
                                        <div className="social-icons">
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-linkedin-in"></i>
                                            <i className="fa-brands fa-youtube"></i>
                                        </div>
                                        <h5>FOLLOW US</h5>
                                        <p>Stay updated with our latest</p>
                                        <p>news, events and impact stories.</p>                                    
                                    </div>
                                    <div className="col-md-5 col-lg-5 col-sm-12 cntct22">
                                        <h1></h1>
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


export default Contact