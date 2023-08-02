import React from "react";
import "./Questions.css";
import Accordion from "./Accordion.jsx";


const Questions = () => {
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
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
            <h3>Do you have any specific question?</h3>
            <p>
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder="Enter email address" />
            <textarea placeholder="Enter your question"></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Questions;
