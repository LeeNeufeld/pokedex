import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { Component } from "react";
import { OFFICIAL_IMAGE_URL, POKEMON_API_URL } from "../../config";
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
  StyledMoveBox,
  StyledMoveTitle,
  StyledMoveLevel,
} from "./styles";
import Favorite from "@mui/icons-material/Favorite";
import { connect } from "react-redux";
import { toggleFavourite } from "../../redux/actions";

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

  favouriteChecker(pokemon) {
    let found = false;
    this.props.favourites?.map((p) => {
      if (p.id === pokemon.id) {
        found = true;
      }
    });
    return found;
  }

  render() {
    const { pokemon } = this.state;

    if (pokemon) {
      const { name, sprites, height, weight, types, id, moves } = pokemon;
      const image = OFFICIAL_IMAGE_URL + id + ".png";
      return (
        <Box>
          <StyledBox>
            <StyledTitle variant="h1">{name}</StyledTitle>
            <StyledPokemonImage
              src={image ? image : sprites.other.home.front_default}
            />
            <StyledPokemonInfoContainer>
              <StyledHr />
              <Grid container>
                <Grid item xs={12} md={2}>
                  <StyledFavButton
                    sx={{
                      color: this.favouriteChecker(pokemon) ? "red" : "white",
                    }}
                    onClick={() => this.props.toggleFavourite(pokemon)}
                  >
                    <Favorite sx={{ fontSize: 50 }} />
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

          <StyledMoveBox>
            <StyledHr />
            <Typography sx={{ mb: 3, mt: 5 }} variant="h5">
              Move List
            </Typography>
            {moves.map((pokemonMove) => {
              const { name } = pokemonMove.move;
              const { level_learned_at } = pokemonMove.version_group_details[0];

              return (
                <Grid container sx={{ pb: 3 }}>
                  <Grid item xs={6} sx={{ mb: 1 }}>
                    <StyledMoveTitle>{name}:</StyledMoveTitle>
                  </Grid>
                  <Grid xs={6} item sx={{ mb: 1 }}>
                    <StyledMoveLevel>
                      {level_learned_at === 0
                        ? "TM Taught"
                        : ` Learned at level ${level_learned_at}`}
                    </StyledMoveLevel>
                  </Grid>
                </Grid>
              );
            })}
          </StyledMoveBox>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavourite: (pokemon) => dispatch(toggleFavourite(pokemon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
