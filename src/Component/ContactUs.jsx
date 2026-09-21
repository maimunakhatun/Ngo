import React, { useState } from "react";
import MenuBar from "./Menubar";
import image1 from '../assets/cntct1.png'
import Footer from './Footer'

const Contact = () => {
    const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${form.name}! Your message has been sent.`);
        setForm({ name:'', email:'', subject:'', message:'' });
    }

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

            <div className="container mt-4">
                <div className="row g-4">
                    {/* Left - Contact Info */}
                    <div className="col-md-7 col-lg-7 col-sm-12 cntct21">
                        <h3>Our contact information</h3>
                        <h1>We're Here to Help</h1>
                        <div className="row g-4 mt-2">
                            <div className="col-md-6">
                                <div className="contact-card green-card">
                                    <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                    <div className="contact-content">
                                        <h5>PHONE</h5>
                                        <p>+91 7679024968</p>
                                        <p>(Mon – Fri, 9 AM – 6 PM)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-card green-card">
                                    <div className="contact-icon"><i className="fa-regular fa-envelope"></i></div>
                                    <div className="contact-content">
                                        <h5>EMAIL</h5>
                                        <p>info@nowastefood.org</p>
                                        <p>We usually reply within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-card yellow-card">
                                    <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                                    <div className="contact-content">
                                        <h5>OUR LOCATION</h5>
                                        <p>Kabi Nazrul, A Zone</p>
                                        <p>City Center, Durgapur – 713191</p>
                                        <p>West Bengal, India</p>
                                    </div>
                                </div>
                            </div>
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
                            </div>
                        </div>
                    </div>

                    {/* Right - MARK KORA FORM TA */}
                    <div className="col-md-5 col-lg-5 col-sm-12 cntct22">
                        <div style={{
                            background: '#f4fdf6',
                            borderRadius: '16px',
                            padding: '24px',
                            border: '1px solid #e0f2e3',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            marginTop: '140px'
                        }}>
                            <h3 style={{fontSize:'17px', fontWeight:'800', color:'#0f3d0f'}}>Send Us a Message</h3>
                            <p style={{fontSize:'11px', color:'#777', marginBottom:'16px'}}>Fill out the form below and we'll get back to you soon.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-2 mb-2">
                                    <div className="col-6">
                                        <label style={{fontSize:'10px', fontWeight:'700'}}>Full Name *</label>
                                        <input type="text" name="name" value={form.name} required placeholder="Your name" onChange={handleChange}
                                            className="form-control" style={{fontSize:'12px', padding:'8px 12px', borderRadius:'8px'}} />
                                    </div>
                                    <div className="col-6">
                                        <label style={{fontSize:'10px', fontWeight:'700'}}>Email Address *</label>
                                        <input type="email" name="email" value={form.email} required placeholder="you@example.com" onChange={handleChange}
                                            className="form-control" style={{fontSize:'12px', padding:'8px 12px', borderRadius:'8px'}} />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label style={{fontSize:'10px', fontWeight:'700'}}>Subject *</label>
                                    <select name="subject" value={form.subject} required onChange={handleChange} className="form-select" style={{fontSize:'12px', padding:'8px 12px', borderRadius:'8px'}}>
                                        <option value="">Select a subject</option>
                                        <option>Donate Food</option>
                                        <option>Volunteer</option>
                                        <option>Partner With Us</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label style={{fontSize:'10px', fontWeight:'700'}}>Your Message *</label>
                                    <textarea name="message" value={form.message} required rows="4" placeholder="Type your message here..." onChange={handleChange}
                                        className="form-control" style={{fontSize:'12px', padding:'8px 12px', borderRadius:'8px'}}></textarea>
                                </div>
                                <button type="submit" className="btn w-100" style={{background:'#0f5d30', color:'white', borderRadius:'20px', fontSize:'12px', fontWeight:'700', padding:'10px'}}>
                                    ✈ Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* LAST ROW - GREEN MARK KORA JAIGA */}
<div className="container mt-5 mb-5">
    <div className="row g-4">

        {/* 1. Partner With Us */}
        <div className="col-md-4">
            <div style={{
                background: '#f4fdf6',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid #e0f2e3',
                height: '100%',
                display: 'flex',
                gap: '15px',
                alignItems: 'center'
            }}>
                <div>
                    <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300" alt="partner" 
                         style={{width:'110px', height:'130px', borderRadius:'12px', objectFit:'cover'}} />
                </div>
                <div>
                    <h6 style={{fontSize:'11px', fontWeight:'800', color:'#0f5d30', background:'#e6f5e8', padding:'4px 8px', borderRadius:'10px', display:'inline-block'}}>Partner with us or visit our center.</h6>
                    <p style={{fontSize:'10px', color:'#666', marginTop:'8px', lineHeight:'1.4'}}>We welcome volunteers, donors and collaborators who share our vision.</p>
                </div>
            </div>
        </div>

        {/* 2. Find Us - Map */}
        <div className="col-md-4">
            <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #e0f2e3',
                height: '100%'
            }}>
                <h6 style={{fontSize:'13px', fontWeight:'800', color:'#0f3d0f', marginBottom:'10px'}}><i className="fa-solid fa-location-dot" style={{color:'#0f5d30'}}></i> Find Us</h6>
                
                <div style={{borderRadius:'10px', overflow:'hidden', border:'1px solid #ddd'}}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.123!2d88.40!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzEyLjAiTiA4OMKwMjQnMC4wIkU!5e0!3m2!1sen!2sin!4v1"
                        width="100%" height="130" style={{border:0}} allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
                <p style={{fontSize:'9px', color:'#555', marginTop:'8px'}}><i className="fa-solid fa-location-dot"></i> 123 Green Lane, Sector V, Salt Lake, Kolkata - 700091, West Bengal, India</p>
            </div>
        </div>

        {/* 3. Quick Contact */}
        <div className="col-md-4">
            <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #e0f2e3',
                height: '100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between'
            }}>
                <div>
                    <h6 style={{fontSize:'13px', fontWeight:'800', color:'#0f3d0f'}}><i className="fa-brands fa-whatsapp" style={{color:'#0f5d30'}}></i> Quick Contact</h6>
                    <p style={{fontSize:'10px', color:'#666'}}>Prefer a quicker chat? Connect with us on WhatsApp.</p>
                    
                    <a href="https://wa.me/919876543210" target="_blank" style={{
                        background:'#0f5d30',
                        color:'white',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        padding:'10px 14px',
                        borderRadius:'20px',
                        fontSize:'11px',
                        fontWeight:'700',
                        textDecoration:'none',
                        marginTop:'10px'
                    }}>
                        <span><i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp</span> <span>→</span>
                    </a>
                </div>

                <div style={{
                    background:'#f4fdf6',
                    borderRadius:'10px',
                    padding:'10px',
                    marginTop:'12px',
                    display:'flex',
                    gap:'8px',
                    alignItems:'center',
                    border:'1px solid #e0f2e3'
                }}>
                    <i className="fa-solid fa-phone" style={{color:'#0f5d30', fontSize:'12px'}}></i>
                    <p style={{fontSize:'9px', margin:0, color:'#555'}}>For urgent matters,<br/>please call us at<br/><b style={{fontSize:'10px', color:'#000'}}>+91 98765 43210</b></p>
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



