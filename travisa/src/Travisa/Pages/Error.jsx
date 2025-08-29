import React from 'react'
import Navbar from '../Common/Navbar'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Error() {
    return (
        <div>
            <Navbar />
            <Header title="404 Pages" name="404 Page" />

            {/* 404 Start */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5 text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <i className="bi bi-exclamation-triangle display-1 text-secondary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="index.html">Go Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}


            <Footer />
        </div>
    )
}

export default Error
