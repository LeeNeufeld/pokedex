import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./styles";

function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={4} lg={2} key={id}>
      <Link to={"/pokemon/" + id}>
        <StyledCard>
          <StyledCardMedia image={image} />
          <StyledCardContent>
            <Typography>{name}</Typography>
            <Typography>#{id}</Typography>
          </StyledCardContent>
        </StyledCard>
      </Link>
    </Grid>
  );
}

export default PokemonCard;
