import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // const fetchTours = async () => {
  //   setLoading(true);
  //   fetch(url)
  //     .then((resp) => {
  //       if (resp.status >= 200 && resp.status <= 299) {
  //         return resp.json();
  //       } else {
  //         setLoading(false);
  //         throw new Error(resp.statusText);
  //       }
  //     })
  //     .then((resp) => {
  //       setLoading(false);
  //       console.log(resp);
  //     })
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div class="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            {" "}
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} loading={loading} />
    </main>
  );
}

export default App;
