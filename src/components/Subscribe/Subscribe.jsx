import React from "react";
import "./Subscribe.css";

//images
import image from "../../assets/R.png";

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image} alt="div img" />

        <div className="textDiv">
          <h4>Best way to start your journey!</h4>
          <p>
            We offer personalized itineries tailor to individual preferences and
            interests
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
