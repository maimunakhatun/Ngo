import React from "react";
import Logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";


const MenuBar= () => {
    return (
        <>
             <div className="container-fluid header-menu">
                <div className="row">
                    <div className="col-md-2 col-lg-2 col-sm-12">
                        <div className="logo mt-2">
                            <img src={Logo} alt='Logo' height={"70px"} width={"90px"} />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <div className="menu-area">
                            {/* <center> */}
                                <nav>
                                    <ul>
                                        <li><NavLink to={'/'} className={'menutab'}>Home</NavLink></li>
                                        <li><NavLink to={'/About'} className={'menutab'}>About us</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>Our work</NavLink></li>
                                        <li><NavLink to={'/Howitworks'} className={'menutab'}>HOW IT WORKS</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>Impact</NavLink></li>
                                        <li><NavLink to={'/Getinvolve'} className={'menutab'}>GET INVOLVED</NavLink></li>
                                        <li><NavLink to={'/'} className={'menutab'}>Contact us</NavLink></li>
                                    </ul>
                                </nav>
                            {/* </center> */}
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 col-sm-12 top-right">
                            <button className="btn btn">Donate <i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MenuBar