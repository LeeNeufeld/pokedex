import React from "react";
import { StyledAppBar, StyledTitle, StyledLink } from "./styles";
import { Toolbar } from "@mui/material";

function NavBar() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <StyledLink to="/">
          <StyledTitle variant="h6">Pokedex</StyledTitle>
        </StyledLink>
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavBar;
