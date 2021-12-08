import { Grid, Typography } from "@mui/material";
import React from "react";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./styles";

function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} key={id}>
      <StyledCard>
        <StyledCardMedia image={image} />
        <StyledCardContent>
          <Typography>{name}</Typography>
        </StyledCardContent>
      </StyledCard>
    </Grid>
  );
}

export default PokemonCard;
