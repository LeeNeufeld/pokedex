import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
});
export const StyledTitle = styled(Typography)({
  cursor: "pointer",
  color: "white",
});
