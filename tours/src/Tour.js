import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  let images = useRef(null);
  useEffect(() => {
    gsap.to(images, {
      duration: 0.8,
      scale: 0.9,
      borderRadius: 0,
    });
  });
  const onMouseIn = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      duration: 0.8,
      scale: 1.01,
      borderRadius: 30,
    });
    gsap.to(images, {
      scale: 1.01,
      borderRadius: 30,
    });
  };
  const onMouseOut = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      duration: 0.8,
      scale: 0.9,
      borderRadius: 0,
    });
    gsap.to(images, {
      duration: 0.8,
      scale: 0.9,
      borderRadius: 0,
    });
  };
  return (
    <article
      className="single-tour"
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <div className="tour-image">
        <img src={image} alt={name} ref={(el) => (images = el)} />
      </div>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">
            <h4>${price}</h4>
          </div>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {" "}
            {readMore ? "show less" : "read more"}{" "}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
