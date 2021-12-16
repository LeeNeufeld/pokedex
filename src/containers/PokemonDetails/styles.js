import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)({
  height: "84vh",
  backgroundColor: "black",
  color: "white",
  marginTop: 75,
  textAlign: "center",
  borderRadius: 5,
  paddingTop: 30,
});
export const StyledMoveBox = styled(Box)({
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  borderRadius: 5,
  padding: 30,
});
export const StyledTitle = styled(Typography)({
  textTransform: "uppercase",
  fontFamily: "fantasy",
});
export const StyledPokemonImage = styled("img")({
  width: "400px",
  height: "400px",
});
export const StyledPokemonInfoContainer = styled(Box)({
  bottom: 60,
  position: "absolute",
  width: "100%",
});
export const StyledHr = styled("hr")({
  height: "0.01mm",
  width: "95%",
});
export const StyledFavButton = styled(Button)({
  height: 50,
  width: 50,
  marginTop: 15,
});
export const StyledText = styled(Typography)({
  fontSize: 30,
  textTransform: "capitalize",
});
export const StyledMoveTitle = styled(Typography)({
  fontSize: 20,
  textTransform: "capitalize",
});
export const StyledMoveLevel = styled(Typography)({
  fontSize: 20,
  textTransform: "capitalize",
});
export const StyledSpan = styled("span")({
  fontSize: 30,
  textTransform: "capitalize",
  fontStyle: "italic",
});

export const StyledBr = styled("br")({
  "@media (max-width: 898px)": {
    display: "none",
  },
});
