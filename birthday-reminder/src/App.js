import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const peopleHandler = () => {
    setPeople([]);
  };
  return (
    <>
      <main>
        <section class="container">
          <h3> {people.length} - birthday today</h3>
          <List people={people} />
          <button onClick={peopleHandler}>clear all</button>
        </section>
      </main>
    </>
  );
}

export default App;
