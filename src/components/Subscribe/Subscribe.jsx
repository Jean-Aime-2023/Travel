import React,{useEffect} from "react";
import "./Subscribe.css";

//images
import image from "../../assets/R.png";

//aos
import Aos from "aos";
import 'aos/dist/aos.css'

const Subscribe = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
   },[])

  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image} alt="div img"  data-aos="fade-down" />

        <div className="textDiv">
          <h4  data-aos="fade-up">Best way to start your journey!</h4>
          <p  data-aos="fade-up" >
            We offer personalized itineries tailor to individual preferences and
            interests
          </p>
          <button  data-aos="fade-up" className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
