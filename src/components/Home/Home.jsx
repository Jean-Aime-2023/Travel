import React from "react";
import "./Home.css";
import Video from "../../assets/Vosges - 25477.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";

import place1 from '../../assets/place1.jpeg'
import place2 from '../../assets/place2.jpeg'
import place3 from '../../assets/place3.jpeg'
import place4 from '../../assets/place4.jpeg'

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>
          Discover the World's most adventurous nature,life is so short for a
          trip
        </p>
        <button className="btn flex">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            <img src={place1} alt="detination images" />
            <img src={place2} alt="detination images" />
            <img src={place3} alt="detination images" />
            <img src={place4} alt="detination images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
