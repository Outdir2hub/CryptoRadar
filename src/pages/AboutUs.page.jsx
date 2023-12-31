import React from "react";
import aboutImg from "../assets/images/about-us-image.jpg";

const AboutUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-3 rounded">
                    <h3>About us</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    We are a team of crypto enthusiasts who want to share our passion and knowledge with the world. Our site provides you with the latest and most accurate information on various cryptocurrencies, such as their prices, market caps, and trends. Whether you are a beginner or an expert, you will find something useful and interesting on our site. Join us today and discover the exciting world of crypto!</div>
                <div className="col-md-6 text-center pt-3">
                    <img className="img-fluid" src={aboutImg} alt="about-us" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;