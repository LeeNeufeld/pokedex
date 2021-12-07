import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Pokedex from "./containers/Pokedex";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App;
