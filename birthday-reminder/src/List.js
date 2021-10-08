import React, { useRef } from "react";
import gsap from "gsap";

const List = ({ people }) => {
  let images = useRef(null);
  let tl = new gsap.timeline();
  const animation = (el) => {
    if (people.length > 0) {
      images = el;
      gsap.to(images, { duration: 5, css: { visibility: "visible" } }, 3);

      tl.from(images, { duration: 2, x: 1280 }, 3);
    }
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person" ref={(el) => animation(el)}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
