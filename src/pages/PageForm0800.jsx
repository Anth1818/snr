import { createTheme, ThemeProvider } from "@mui/material/styles";
import CintilloHeader from "../components/CintilloHeader/CintilloHeader";

import Footer from "../components/Footer/Footer";
import ResponsiveLayoutForm0800 from "../components/ResponsiveLayout/ResponsiveLayoutForm0800.jsx";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PageForm0800() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CintilloHeader></CintilloHeader>
      <ResponsiveLayoutForm0800></ResponsiveLayoutForm0800>
      <Footer></Footer>
    </ThemeProvider>
  );
}
