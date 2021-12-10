import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Pokedex from "./containers/Pokedex/Pokedex";
import PokemonDetails from "./containers/PokemonDetails/PokemonDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/pokemon/:id" component={PokemonDetails} />
    </Router>
  );
}

export default App;
