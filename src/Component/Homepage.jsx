import React from "react";
import img from "../assets/img1.jpeg";

const Home = () => {
    return (
        <>
            {/* Top Description Section */}
            <div className="container-fluid descrip">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-lg-3 col-sm-12 First1">
                            <i className="fa-solid fa-leaf icon1"></i>
                            <h1>Reduce Food Waste</h1>
                            <h2>
                                We collect surplus food from
                                <br />
                                restaurants, stores and farms.
                            </h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Second">
                            <i className="fa-solid fa-users icon2"></i>
                            <h1>Support Communities</h1>
                            <h2>
                                We distributes nutritious food
                                <br />
                                to those in need.
                            </h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i className="fa-solid fa-arrows-spin icon3"></i>
                            <h1>Create a Sustainable Future</h1>
                            <h2>
                                Less waste means a healtier
                                <br />
                                planet.
                            </h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Forth">
                            <i className="fa-regular fa-heart icon4"></i>
                            <h1>Build Awareness</h1>
                            <h2>
                                We educate and inspire
                                <br />
                                for lasting change.
                            </h2>
                        </div>

                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-lg-6 col-sm-12 F1">
                        <img
                            src={img}
                            alt="Food waste management"
                            height="400px"
                            width="450px"
                        />
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 F2">
                        <h2>About us</h2>

                        <h1>
                            Turning Surplus into <b>Smiles</b>
                        </h1>

                        <p>
                            Food for Tomorrow is a non-profit organisation
                            focused on food waste management and community
                            support. We work with business, farmers, and local
                            partners to rescue edible surplus food and
                            redistribute it to people in need, while also
                            promoting sustainable practices and awareness
                            about food waste.
                        </p>

                        <button className="bttn bttn">
                            Our mission&nbsp;
                            <i className="fa-solid fa-arrow-right icn"></i>
                        </button>
                    </div>

                </div>
            </div>

            {/* Impact Section */}
            <div className="container-fluid descrip">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-lg-4 col-sm-12 Second1">
                            <h3>our impact</h3>
                            <h1>Real Food. Real Change.</h1>
                            <h2>
                                Every meal saved makes a difference - for
                                people and the planet
                            </h2>
                        </div>

                        <div className="col-md-2 col-lg-2 col-sm-12 Second2">
                            <i className="fa-solid fa-bowl-rice icn2"></i>
                            <h1>12,500+</h1>
                            <h2>Meals Distributed</h2>
                        </div>

                        <div className="col-md-2 col-lg-2 col-sm-12 Second2">
                            <i className="fa-solid fa-users icn2"></i>
                            <h1>4+</h1>
                            <h2>Partner Organisations</h2>
                        </div>

                        <div className="col-md-2 col-lg-2 col-sm-12 Second2">
                            <i className="fa-brands fa-envira icn2"></i>
                            <h1>6,800+ kg</h1>
                            <h2>Food Saved</h2>
                        </div>

                        <div className="col-md-2 col-lg-2 col-sm-12 Second3">
                            <i className="fa-brands fa-pagelines icn2"></i>
                            <h1>3+</h1>
                            <h2>Communities Supported</h2>
                        </div>

                    </div>
                </div>
            </div>

            {/* How It Works */}
            <h5>How it Works</h5>
            <h4>From Surplus to Support</h4>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i className="fa-solid fa-shop i2"></i>
                            <h1>1. Collect</h1>
                            <h2>
                                We collect surplus food from local business,
                                stores and farms.
                            </h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i className="fa-regular fa-truck i2"></i>
                            <h1>2. Sort &amp; Ensure Safety</h1>
                            <h2>
                                Food is checked, sorted, and made safe for
                                consumption
                            </h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i className="fa-solid fa-users-between-lines i2"></i>
                            <h1>3. Distribute</h1>
                            <h2>
                                We deliver the food to NGOs, shelters and
                                communities in need.
                            </h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i className="fa-brands fa-envira i2"></i>
                            <h1>4. Create Impact</h1>
                            <h2>
                                Less food waste, healthier communities and a
                                greener planet.
                            </h2>
                        </div>

                    </div>
                </div>
            </div>

            {/* Call To Action */}
            <div className="container back">
                <div className="col-md-12 col-lg-12 col-sm-12 txt1">

                    <h1>Be a part of the change</h1>

                    <h2>Together We Can End Food Waste</h2>

                    <p>
                        Support our mission by donating, volunteering or
                        spreading the word.
                    </p>

                    <button className="btn btn">
                        <i className="fa-regular fa-heart"></i> Donate Now
                    </button>

                    <button className="btn btn">
                        Get involved&nbsp;
                        <i className="fa-solid fa-arrow-right icn"></i>
                    </button>

                </div>
            </div>
        </>
    );
};

export default Home;