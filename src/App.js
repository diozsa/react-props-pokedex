import React from 'react';
import pokes from "./pokelist";
import Pokedex from './Pokedex';


// import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokes={pokes} />

    </div>
  );
}

export default App;
