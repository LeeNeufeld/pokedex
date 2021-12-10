import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { Component } from "react";
import { POKEMON_API_URL } from "../../config";
import {
  StyledBox,
  StyledFavButton,
  StyledHr,
  StyledPokemonImage,
  StyledPokemonInfoContainer,
  StyledTitle,
  StyledText,
  StyledBr,
  StyledSpan,
} from "./styles";
import Favorite from "@mui/icons-material/Favorite";

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match?.params) {
      const { id } = match.params;

      axios.get(POKEMON_API_URL + "/" + id).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          this.setState({ pokemon: response.data });
        }
      });
    }
  }

  render() {
    const { pokemon } = this.state;

    if (pokemon) {
      const { name, sprites, height, weight, types, id, moves } = pokemon;

      return (
        <Box>
          <StyledBox>
            <StyledTitle variant="h1">{name}</StyledTitle>
            <StyledPokemonImage src={sprites.front_default} />
            <StyledPokemonInfoContainer>
              <StyledHr />
              <Grid container>
                <Grid item xs={12} md={2}>
                  <StyledFavButton>
                    <Favorite sx={{ color: "white", fontSize: 50 }} />
                  </StyledFavButton>
                </Grid>
                <Grid item xs={6} md={2}>
                  <StyledText>
                    Number: <StyledBr />
                    <StyledSpan> {id}</StyledSpan>
                  </StyledText>
                </Grid>
                <Grid item xs={6} md={2}>
                  <StyledText>
                    Name: <StyledBr />
                    <StyledSpan> {name}</StyledSpan>
                  </StyledText>
                </Grid>
                <Grid item xs={6} md={2}>
                  <StyledText>
                    Height:
                    <StyledBr />
                    <StyledSpan> {height}m</StyledSpan>
                  </StyledText>
                </Grid>
                <Grid item xs={6} md={2}>
                  <StyledText>
                    Weight:
                    <StyledBr />
                    <StyledSpan> {weight} kg</StyledSpan>
                  </StyledText>
                </Grid>

                {types.map((pokemonType) => {
                  const { name } = pokemonType.type;
                  return (
                    <Grid item xs={6} md={2}>
                      <StyledText>
                        Type:
                        <StyledBr /> <StyledSpan> {name}</StyledSpan>
                      </StyledText>
                    </Grid>
                  );
                })}
              </Grid>
            </StyledPokemonInfoContainer>
          </StyledBox>
          <StyledBox>
            <Grid container>
              {moves.map((pokemonMove) => {
                const { name } = pokemonMove.move;
                return (
                  <Grid item xs={12}>
                    <StyledText>{name}</StyledText>
                  </Grid>
                );
              })}
            </Grid>
          </StyledBox>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

export default PokemonDetails;
