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
            <div className="row align-items-center">
                <div className="col-md-6 pt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, in. Voluptatum, enim neque modi autem ex delectus tenetur, eum blanditiis necessitatibus unde repellendus adipisci maxime, natus ratione. Facilis nostrum expedita impedit autem officia dolorem consequuntur, sapiente iusto consequatur veniam eligendi in fugit commodi quo molestias libero? Quis qui, nisi temporibus et consequuntur libero. Culpa unde vero explicabo numquam iure. Obcaecati officia ab mollitia nesciunt amet aspernatur, consequatur enim consequuntur architecto velit, repellendus, laborum delectus reiciendis.
                </div>
                <div className="col-md-6 text-center pt-3">
                    <img className="img-fluid" src={aboutImg} alt="about-us" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;