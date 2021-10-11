import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  fetch(url).then((resp)=>resp.json()        )
  return (
    <section className="container">
      <h1>Tours Project Setup</h1>
    </section>
  );
}

export default App;
