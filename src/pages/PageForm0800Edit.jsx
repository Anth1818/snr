import { createTheme, ThemeProvider } from "@mui/material/styles";
import CintilloHeader from "../components/CintilloHeader/CintilloHeader";
import { useParams } from "react-router-dom";
import useLocalStorageData from '../hooks/useLocalStorageData';

// import Footer from "../components/Footer/Footer";
import ResponsiveLayoutForm0800Edit from "../components/ResponsiveLayout/ResponsiveLayoutForm0800Edit.jsx";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PageForm0800Edit() {
  const {caseId} = useParams()
  const {data} = useLocalStorageData('datosGuardados', caseId);


  return (

    <ThemeProvider theme={defaultTheme}>
      <CintilloHeader></CintilloHeader>
        <ResponsiveLayoutForm0800Edit caseId={caseId} data={data}></ResponsiveLayoutForm0800Edit>
      {/* <Footer></Footer> */}
    </ThemeProvider>
  );
}
