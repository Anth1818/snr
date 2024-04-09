import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#2e219e",
    },
    secondary: {
      main: "#f64613",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
