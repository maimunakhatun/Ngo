import React from "react";

import MenuBar from "./Menubar";
import pic2 from '../assets/impact2.png'
import Benefits from "./Benefits";
import pic from '../assets/impct1.png'
import ImpactArray from "./ArrayImpact";


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
                    <div className="col-md-8 col-lg-8 col-sm-12 im22">
                        <h1></h1>
                    </div>
                </div>
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

           
        </>
    )
}


export default Impact