
import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import Chevron from "../../assets/scroll-icon-23 (2).png";

//aos
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Accordion() {
  useEffect(()=>{
    Aos.init({duration: 2000})
   },[])

  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    // console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  // console.log(toggle);
  return (
    <div className="accordion"  data-aos="fade-up">
      <button onClick={toggleState} className="accordion-visible">
        <span>Lorem ipsum dolor sit amet.</span>
        <img className={toggle && "active"} src={Chevron} />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p
          aria-hidden={toggle ? "true" : "false"}
          style={{ background: "hsl(300,3%,94%)" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          suscipit quae maiores sunt ducimus est dolorem perspiciatis earum
          corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel
          quo eligendi ipsam.
        </p>
      </div>
    </div>
  );
}
