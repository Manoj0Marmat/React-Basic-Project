import React, { useRef } from "react";
import gsap from "gsap";

const List = ({ people }) => {
  let element = [];
  let delay = 2;
  let images = useRef(null);
  let tl = new gsap.timeline();
  const animation = (el) => {
    if (people.length > 0) {
      images = el;
      element.push(images);
      if (people.length === element.length) {
        element.map((article) => {
          delay += 0.2;
          gsap.to(
            article,
            { duration: 5, css: { visibility: "visible" } },
            delay
          );
          tl.from(article, { duration: 2, x: 1280 }, delay);
        });
      }
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
