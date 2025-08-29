import React, { useEffect, useState } from 'react'
import Navbar from '../Common/Navbar'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import axios from 'axios'

function Feature() {

    const [features, setfeatures] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/feature")
        console.log(res.data)
        setfeatures(res.data)
    }


    return (
        <div>
            <Navbar />
            <Header title="Our Features" name="Feature" />

            <div>
                {/* Features Start */}
                <div className="container-fluid features overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
                            </div>
                            <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 justify-content-center text-center">


                            {
                                features && features.map((data) => {
                                    console.log(data)
                                    return (
                                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="feature-item text-center p-4">
                                                <div className="p-3 mb-4">
                                                    {/* <i className="fas fa-atlas fa-4x text-primary" /> */}
                                                    <img src={data.img}  className="img-fluid w-100 rounded"  style={{height:"300px",width:"300px"}} alt />
                                                </div>
                                                <div className="feature-content d-flex flex-column">
                                                    <h5 className="mb-3">{data.title}</h5>
                                                    <p className="mb-3">{data.description}</p>
                                                    <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }

                            <div className="col-12">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Features</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features End */}
                {/* Counter Facts Start */}
                <div className="container-fluid counter-facts overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="row g-4">
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-passport" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Categories</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">31</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-users" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Team Members</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">377</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-user-check" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Visa Process</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">4.9</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>K</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="counter">
                                    <div className="counter-icon">
                                        <i className="fas fa-handshake" />
                                    </div>
                                    <div className="counter-content">
                                        <h3>Success Rates</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <span className="counter-value" data-toggle="counter-up">98</span>
                                            <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: 25 }}>%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter Facts End */}
                {/* Countries We Offer Start */}
                <div className="container-fluid country overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: 70 }}>
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
                            </div>
                            <h1 className="display-5 mb-4">Immigration &amp; visa services following Countries</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="row g-4 text-center">
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/brazil.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">Brazil</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/india.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">india</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/usa.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">New York</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="country-item">
                                    <div className="rounded overflow-hidden">
                                        <img src="img/country-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                    </div>
                                    <div className="country-flag">
                                        <img src="img/italy.jpg" className="img-fluid rounded-circle" alt="Image" />
                                    </div>
                                    <div className="country-name">
                                        <a href="#" className="text-white fs-4">Italy</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Countries</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Countries We Offer End */}
            </div>

            <Footer />
        </div>
    )
}

export default Feature
