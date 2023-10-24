import { createTheme, ThemeProvider } from "@mui/material/styles";
import CintilloHeader from "../components/CintilloHeader/CintilloHeader";

import Footer from "../components/Footer/Footer";
import ResponsiveLayoutStatistics from "../components/ResponsiveLayout/ResponsiveLayoutOAC";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Statistics() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CintilloHeader></CintilloHeader>
      <ResponsiveLayoutStatistics></ResponsiveLayoutStatistics>
      {/* <Footer></Footer> */}
    </ThemeProvider>
  );
}
