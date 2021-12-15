import { Box } from "@mui/system";

import React, { Component } from "react";

import { connect } from "react-redux";
import PokemonCard from "../../components/Cards/PokemonCard";
import { StyledPokedexContainer } from "./styles";

class Favourites extends Component {
  render() {
    const { favourites } = this.props;
    return (
      <Box>
        <StyledPokedexContainer container spacing={2}>
          {favourites.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            );
          })}
        </StyledPokedexContainer>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
