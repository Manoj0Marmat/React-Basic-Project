import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import data from "./data";
import List from "./List";
function App() {
  let app = useRef(null);
  let heading = useRef(null);
  let button = useRef(null);
  const [people, setPeople] = useState(data);

  const peopleHandler = () => {
    setPeople([]);
  };
  useEffect(() => {
    if (people.length !== 0) {
      gsap.from(app, { duration: 3, y: -1280 });
      gsap.to(app, { duration: 1, css: { visibility: "visible" } });
      gsap.to(heading, { duration: 2, css: { visibility: "visible" } }, 3);
      gsap.to(button, { duration: 3, css: { visibility: "visible" } }, 4);
    }
  });
  return (
    <>
      <main>
        <section className="container" ref={(el) => (app = el)}>
          <h3 ref={(el) => (heading = el)}>{people.length} - birthday today</h3>
          <List people={people} />
          <button onClick={peopleHandler} ref={(el) => (button = el)}>
            clear all
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
