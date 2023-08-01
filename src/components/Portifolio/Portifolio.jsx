import React from "react";
import "./Portifolio.css";

//image-icons
import icon1 from '../../assets/safety.png';
import icon2 from '../../assets/multi-locations.png';
import icon3 from '../../assets/cust-support.png';

//images
import image from '../../assets/grid.png'

const Portifolio = () => {
  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel
              industry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Image" />
              </div>

              <div className="info">
                <h4>Safety and Support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="Icon Image" />
              </div>

              <div className="info">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="Icon image" />
              </div>

              <div className="info">
                <h4>24/7 Customer Support</h4>
                <p>
                  Address common questions about your 24/7 support, such as how long customers can expect to wait for a response, the languages your team supports, and the types of issues you can help with.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent">
         <img src={image} alt="Image" /> 
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
