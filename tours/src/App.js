import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
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
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
