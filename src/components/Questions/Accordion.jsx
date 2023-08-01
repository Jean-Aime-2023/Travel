// const Accordion = ({ title, desc, active, setActive }) => {
//   return (
//     <div className="accordionContainer">
//       <span
//         className={(active === title ? 'activeTitle' : '') + 'title' + 'flex'}
//       >
//         {title}
//         <span onClick={() => setActive(title)}>
//           {active === title ? (
//             <BsArrowDownCircle className="icon" />
//           ) : (
//             <BsArrowUpCircle className="icon" />
//           )}
//         </span>
//       </span>
//       <p className={(active === title ? 'show' : '') + 'description'}>{desc}</p>
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import Chevron from "../../assets/scroll-icon-23.png";

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="accordion">
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
          style={{ background: "hsl(14,96%,91%)" }}
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
