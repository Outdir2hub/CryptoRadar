import React from "react";
import contactImg from '../assets/images/contact-us.jpg'

const ContactUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-3 rounded">
                    <h3>Contact us</h3>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 pt-3">
                    <div className="mb-3">
                        <label className="form-label">Your Name:</label>
                        <input type="text" className="form-control" placeholder="Please type your name." />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Message:</label>
                        <input type="text" className="form-control" placeholder="Please type your message." />
                    </div>
                    <button className="btn btn-outline-primary ml-2">Send</button>
                </div>
                <div className="col-md-6 text-center pt-3">
                    <img className="img-fluid" src={contactImg} alt="contact-us" />
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;