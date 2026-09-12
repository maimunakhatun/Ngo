import React from "react";


const Home = () => {
    return (
        <>
            <div className="container-fluid descrip-tion mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-12 First">
                            <i className="fa-solid fa-leaf icon1"></i>
                            <h1>Reduce Food Waste</h1>
                            <h2>We collect surplus food from<br />restaurants, stores and farms.</h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Second">
                            <i class="fa-solid fa-users icon2"></i>
                            <h1>Support Communities</h1>
                            <h2>We distributes nutritious food<br />to those in need.</h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Third">
                            <i class="fa-solid fa-arrows-spin icon3"></i>
                            <h1>Create a Sustainable Future</h1>
                            <h2>Less waste means a healtier<br />planet.</h2>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 Forth">
                            <i class="fa-regular fa-heart icon4"></i>
                            <h1>Build Awareness</h1>
                            <h2>We educate and inspire<br />for lasting change.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home