import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "auto",
  padding: "50px auto",

  [theme.breakpoints.down("lg")]: {
    width: "85%",
  },

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export { StyledContainer };
