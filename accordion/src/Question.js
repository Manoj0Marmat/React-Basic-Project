import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import gsap from "gsap";

const Question = ({ title, info }) => {
  let accordionInfo = useRef(null);

  const [showinfo, setShowinfo] = useState(false);

  useEffect(() => {
    if (showinfo) {
      gsap.from(accordionInfo, {
        duration: 0.5,
        height: 30,
        y: -20,
      });
    }
  });
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShowinfo(!showinfo);
          }}
        >
          {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showinfo && <p ref={(el) => (accordionInfo = el)}>{info}</p>}
    </article>
  );
};

export default Question;
