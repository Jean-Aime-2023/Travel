import React from "react";
import "./Questions.css";
import Accordion from "./Accordion.jsx";
import { useEffect } from "react";

//aos
import Aos from "aos";
import 'aos/dist/aos.css'

const Questions = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
   },[])

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="grid">
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
        </div>

        <div className="form">
          <div className="secHeading">
            <h3 data-aos="fade-up">Do you have any specific question?</h3>
            <p data-aos="fade-up">
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder="Enter email address"  data-aos="fade-up"/>
            <textarea placeholder="Enter your question" data-aos="fade-up"></textarea>
            <button className="btn" data-aos="fade-up">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Questions;
