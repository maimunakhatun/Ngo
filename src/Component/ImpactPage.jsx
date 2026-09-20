import React from "react";

import MenuBar from "./Menubar";
import pic2 from '../assets/impact2.png'
import Benefits from "./Benefits";
import pic from '../assets/impct1.png'
import ImpactArray from "./ArrayImpact";
import Footer from './Footer'
import img from '../assets/story1.jpeg'
import ss from '../assets/story4.jpeg'
import mm from '../assets/story3.jpeg'



const Impact = () => {
    return (
        <>
            <MenuBar/>
        
            <div className="container-fluid descrip">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 im1">
                            <h3>our impact</h3>
                            <h1>Real Food. Real People.</h1>
                            <h2>Lasting Change.</h2>
                            <p>Every meal saved creates a ripple of positive change - reducing food waste, supporting communities and building a more sustainable planet.</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                            <img src={pic} alt="" height={"350px"} width={"750px"} />
                        </div>
                    </div>
                </div>
            </div>



             <ImpactArray/>



                 <div className="container con">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 im21">
                        <h5 className="hhh">Real Stories</h5>
                        <h1>Stories of <b>Impact</b></h1>
                        <p>Behind every number is a real person, a real meal, and a brighter tomorrow. Here aare a few stories that show how your support makes a difference.</p>
                        <h5 className="dd">View More Stories <i className="fa-solid fa-arrow-right icn"></i></h5>
                    </div>

                    {/* EI JAIGATA TE CARD GULO BOSBE */}
                    <div className="col-md-8 col-lg-8 col-sm-12 im22">
                        <div className="row">
                            
                            {/* Card 1 */}
                            <div className="col-md-4 col-sm-12" style={{marginBottom:'15px'}}>
                                <div style={{background:'white', borderRadius:'16px', padding:'12px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', border:'1px solid #eaf6eb'}}>
                                    <img src={img} alt="child" style={{width:'100%', height:'140px', objectFit:'cover', borderRadius:'10px'}} />
                                    <p style={{fontSize:'12px', color:'#333', marginTop:'10px', fontStyle:'italic', minHeight:'40px'}}>"I was so happy to get a good meal. Thank you for helping us."</p>
                                    <p style={{fontSize:'11px', fontWeight:'700', color:'#555', margin:'0'}}>- Rajiv, 8 years</p>
                                    <span style={{background:'#e6f4ea', color:'#2e7d32', padding:'3px 10px', borderRadius:'20px', fontSize:'9px', marginTop:'8px', display:'inline-block', fontWeight:'700'}}>Food for Children</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-md-4 col-sm-12" style={{marginBottom:'15px'}}>
                                <div style={{background:'white', borderRadius:'16px', padding:'12px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', border:'1px solid #eaf6eb'}}>
                                    <img src={ss}alt="elderly" style={{width:'100%', height:'140px', objectFit:'cover', borderRadius:'10px'}} />
                                    <p style={{fontSize:'12px', color:'#333', marginTop:'10px', fontStyle:'italic', minHeight:'40px'}}>"This food means a lot for me. It gives me strength and hope."</p>
                                    <p style={{fontSize:'11px', fontWeight:'700', color:'#555', margin:'0'}}>- Saraswati Devi, 62 years</p>
                                    <span style={{background:'#e6f4ea', color:'#2e7d32', padding:'3px 10px', borderRadius:'20px', fontSize:'9px', marginTop:'8px', display:'inline-block', fontWeight:'700'}}>Food for Elderly</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-md-4 col-sm-12" style={{marginBottom:'15px'}}>
                                <div style={{background:'white', borderRadius:'16px', padding:'12px', boxShadow:'0 4px 15px rgba(0,0,0,0.06)', border:'1px solid #eaf6eb'}}>
                                    <img src={mm}alt="family" style={{width:'100%', height:'140px', objectFit:'cover', borderRadius:'10px'}} />
                                    <p style={{fontSize:'12px', color:'#333', marginTop:'10px', fontStyle:'italic', minHeight:'40px'}}>"You are not just giving food, you are giving us a better future."</p>
                                    <p style={{fontSize:'11px', fontWeight:'700', color:'#555', margin:'0'}}>- Asha's Family</p>
                                    <span style={{background:'#e6f4ea', color:'#2e7d32', padding:'3px 10px', borderRadius:'20px', fontSize:'9px', marginTop:'8px', display:'inline-block', fontWeight:'700'}}>Food for Families</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 im22">
                        <h1></h1>
                    </div>
                
           



            <div className="container impct">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-12 im31">
                        <img src={pic2} alt="..." height={"200px"} width={"300px"}/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 im32">
                        <h1 className="mm">Our bigger picture</h1>
                        <h2>More Than Food - <b>It's a Movement</b></h2>
                        <p>We're not just redistributing food; we're creating a sustainable food system, strengthening communities and protecting the environment for future generations.</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 im31">
                        <Benefits/>
                    </div>
                </div>
            </div>
<Footer/>
           
        </>
    )
}


export default Impact