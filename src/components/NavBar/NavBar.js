import React from "react";
import { StyledAppBar, StyledTitle, StyledLink } from "./styles";
import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <StyledAppBar position="fixed" variant="h6">
      <Toolbar>
        <StyledLink to="/">
          <StyledTitle>Pokedex</StyledTitle>
        </StyledLink>
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavBar;
