import CintilloHeader from "../components/CintilloHeader/CintilloHeader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import { ResponsiveLayout0800 } from "../components/ResponsiveLayout";


const defaultTheme = createTheme();

export default function Page0800() {

   const TABLE_HEAD_0800 = [
     { id: "n_case", label: "Número de caso", alignRight: false },
     { id: "date", label: "Fecha", alignRight: false },
     { id: "location", label: "Ubicación", alignRight: false },
     { id: "user", label: "Usuario", alignRight: false },
     { id: "status", label: "Estatus", alignRight: false },
     { id: "" },
  ];
  
  

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CintilloHeader></CintilloHeader>
        <ResponsiveLayout0800
          dataHeadTable={TABLE_HEAD_0800
          }
        ></ResponsiveLayout0800>
        {/* <Footer></Footer> */}
      </ThemeProvider>
    </>
  );
}
