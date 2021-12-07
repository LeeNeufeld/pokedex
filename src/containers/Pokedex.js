import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <Box>
      {pokemonData ? (
        pokemonData.map((pokemon) => {
          return <h1>{pokemon.name}</h1>;
        })
      ) : (
        <CircularProgress sx={{ mt: 500 }} />
      )}
    </Box>
  );
}

export default Pokedex;
