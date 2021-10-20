import React, { useState, useEffect, useRef } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  const colorsList = [
    "hsl(125, 67%, 44%)",
    "hsl(360, 71%, 66%)",
    "hsl(360, 67%, 44%)",
    "hsl(211, 39%, 23%)",
    "hsl(205, 63%, 48%)",
    "hsl(205, 77%, 27%)",
  ];
  let supriseButton = useRef(null);
  let iconColor = useRef(null);
  let jobText = useRef(null);
  let nextButton = useRef(null);
  let prevButton = useRef(null);

  useEffect(() => {
    let number = Math.floor(Math.random() * colorsList.length);
    supriseButton.style.color = colorsList[number];
    supriseButton.style.borderColor = colorsList[number];
    iconColor.style.background = colorsList[number];
    jobText.style.color = colorsList[number];
    nextButton.style.color = colorsList[number];
    prevButton.style.color = colorsList[number];
  });

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber == index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon" ref={(el) => (iconColor = el)}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job" ref={(el) => (jobText = el)}>
        {job}
      </p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={previousPerson}
          ref={(el) => (nextButton = el)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={nextPerson}
          ref={(el) => (prevButton = el)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={randomPerson}
        ref={(el) => (supriseButton = el)}
      >
        suprise me
      </button>
    </article>
  );
};

export default Review;
