import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Tour = ({ id, name, info, image, price, removeTour, loading }) => {
  const [readMore, setReadMore] = useState(false);
  let images = useRef(null);
  useEffect(() => {
    gsap.from(images, { duration: 0.9, scale: 1.2 });
  });
  const onMouseIn = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.019, borderRadius: 30 });
  };
  const onMouseOut = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.9, borderRadius: 0 });
  };
  return (
    <article
      className="single-tour"
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <img
        src={image}
        alt={name}
        ref={(el) => (images = el)}
        onMouseEnter={onMouseIn}
        onMouseLeave={onMouseOut}
      />
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
