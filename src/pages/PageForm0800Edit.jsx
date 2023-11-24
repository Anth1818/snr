import { createTheme, ThemeProvider } from "@mui/material/styles";
import CintilloHeader from "../components/CintilloHeader/CintilloHeader";

// import Footer from "../components/Footer/Footer";
import ResponsiveLayoutForm0800Edit from "../components/ResponsiveLayout/ResponsiveLayoutForm0800Edit.jsx";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PageForm0800() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <CintilloHeader></CintilloHeader>
        <ResponsiveLayoutForm0800Edit></ResponsiveLayoutForm0800Edit>
      {/* <Footer></Footer> */}
    </ThemeProvider>
  );
}
