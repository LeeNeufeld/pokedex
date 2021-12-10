import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/Cards/PokemonCard";
import { IMAGE_API_URL, POKEMON_API_URL } from "../../config";
import { StyledGridContainer } from "./styles";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=898").then((response) => {
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
    <Box sx={{ mt: 10 }}>
      {pokemonData ? (
        <StyledGridContainer container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            );
          })}
        </StyledGridContainer>
      ) : (
        <CircularProgress sx={{ mt: 100, color: "black" }} />
      )}
    </Box>
  );
}

export default Pokedex;
