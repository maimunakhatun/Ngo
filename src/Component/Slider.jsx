import react from 'react'
import mmm from'../assets/slider1.jpeg'
import sss from '../assets/slider2.jpeg'
import sm from '../assets/slider3.jpeg'



const Slide = () => {
    return (
        <>
            <div className="container-fluid slider-section">
                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={mmm} className="d-block w-100" alt="..."width={'100%'} height={'450px'}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={sss} className="d-block w-100" alt="..."width={'100%'} height={'450px'}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={sm} className="d-block w-100" alt="..." width={'100%'} height={'450px'}/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slide