import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  return <>
  <main>
    <section class="container">
      <h3> 0 - birthday today</h3>
      <List />
      <button onClick={()=> console.log('click on clear button')}>clear all</button>
    </section>
  </main>
  </>;
}

export default App;
