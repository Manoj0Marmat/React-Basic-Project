import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, loading }) => {
  return (
    <section>
      <div class="title">
        <h2>Our Tours</h2>
        <div class="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tours.id}
              {...tour}
              removeTour={removeTour}
              loading={loading}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
