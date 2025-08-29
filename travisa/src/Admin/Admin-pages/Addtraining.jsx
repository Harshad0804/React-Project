import React from 'react'
import Anavbar from '../Admin-Common/Anavbar'
import Aheader from '../Admin-Common/Aheader'

function Addtraining() {
    return (
        <div>
            <Anavbar />
            <Aheader title="Add Training Team" name="Add Trainers" />
            <div className="container">
                <div className="col-lg-12 wow fadeInRight" data-wow-delay="0.3">
                    <div className="sub-style">
                        <h5 className="text-center text-primary m-4 pe-3">Let's Connect</h5>
                    </div>
                    <h1 className="display-5 text-center mb-4">ADD TRAINING TEAM DATA</h1>

                    <form>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="number" placeholder="Your Id" />
                                    <label htmlFor="Tel">ID</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="title" placeholder="title" />
                                    <label htmlFor="text">TITLE</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" className="form-control" id="image" placeholder="Put Your Image Here" />
                                    <label htmlFor="image">IMAGE URL</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">DESCRIPTION</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary w-100 py-3">Send Message</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary w-100 py-3">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Addtraining
