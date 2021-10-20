import React, { useState, useRef, useEffect } from "react";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./Question";
import gsap from "gsap";

function App() {
  const [questions, setQuestions] = useState(data);
  let bgColor = useRef(null);
  let body = document.getElementsByTagName("body");
  const colorsList = [
    "linear-gradient(15deg, #ffafbd, #ffc3a0)",
    "linear-gradient(30deg, #2193b0, #6dd5ed)",
    "linear-gradient(45deg, #0250c5, #d43f8d)",
    "#linear-gradient(60deg, #cc2b5e, #753a88)",
    "linear-gradient(75deg, #42275a, #734b6d)",
    "linear-gradient(90deg, #43cea2, #185a9d)",
  ];
  const animation = () => {
    let number = Math.floor(Math.random() * colorsList.length);

    gsap.from(body, { duration: 3, background: colorsList[number] });
    gsap.to(bgColor, { duration: 3, background: colorsList[number] });
  };

  useEffect(() => {
    window.setInterval(function () {
      animation();
    }, 1900);
  });

  return (
    <main>
      <div className="container" ref={(el) => (bgColor = el)}>
        <h3>questions and answers about login </h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
