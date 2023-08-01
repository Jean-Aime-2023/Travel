import React from "react";
import "./Reviews.css";

//icons
import {AiFillStar} from 'react-icons/ai'

//images
import client1 from '../../assets/person1.jpg'
import client2 from '../../assets/person2.jpeg'
import client3 from '../../assets/person3.jpeg'
import client4 from '../../assets/person5.jpeg'

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customer can expect an enriiching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.
          </p>

          <span className="stars flex">
            <AiFillStar className='icons'/>
            <AiFillStar className='icons'/>
            <AiFillStar className='icons'/>
            <AiFillStar className='icons'/>
            <AiFillStar className='icons'/>
          </span>

          <div className="clientImages flex">
            <img src={client1} alt="client image" />
            <img src={client2} alt="client image" />
            <img src={client3} alt="client image" />
            <img src={client4} alt="client image" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={client4} alt="Div image" />
        </div>

      </div>
    </div>
  );
};

export default Reviews;
