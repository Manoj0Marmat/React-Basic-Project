import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div class="title">
        <h2>Our Tours</h2>
        <div class="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tours.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
