import { Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCardMedia = styled(CardMedia)({
  margin: "auto",
  width: 130,
  height: 130,
});
export const StyledCard = styled(Card)({
  cursor: "pointer",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "rgb(90, 90, 90)",
  },
});
export const StyledCardContent = styled(CardContent)({
  textAlign: "center",
});
