//Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {

  // state to track and update navbar
  const [navBar,setNavBar] = useState('menu')

  //function to show navbar
  const showNavBar=()=>{
    setNavBar("menu showNavbar")
  }

  //function to remove navbar
  const removeNavBar=()=>{
    setNavBar("menu")
  }


  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/>
        <span>OU-Tips</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">
            Destination
          </li>
          <li className="navList">
            About Us
          </li>
          <li className="navList">
            Testimonial
          </li>
          <li className="navList">
            Gallery
          </li>
        </ul> 

        {/* Icon to close Navbar*/}
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>

      </div>

      <button className="signInBtn btn">
         Sign Up
      </button>

      {/* Icon to toggle Navbar*/}
      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  );
};

export default Navbar;