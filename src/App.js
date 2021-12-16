import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import NavBar from "./components/NavBar/NavBar";
import Favourites from "./containers/Favourites/Favourites";
import Pokedex from "./containers/Pokedex/Pokedex";
import PokemonDetails from "./containers/PokemonDetails/PokemonDetails";
import { store, persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavBar />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route exact path="/favourites" component={Favourites} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
