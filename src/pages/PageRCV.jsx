import CintilloHeader from "../components/CintilloHeader/CintilloHeader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import ResponsiveLayoutRCV from "../components/ResponsiveLayout/ResponsiveLayoutRCV";

const defaultTheme = createTheme();

export default function Page0800() {
   const TABLE_HEAD_RCV = [
     {
       id: "name_and_last_name",
       label: "Nombre y Apellido",
       alignRight: false,
     },
     { id: "date", label: "Fecha", alignRight: false },
     { id: "location", label: "Ubicación", alignRight: false },
     { id: "phone_number", label: "Teléfonos", alignRight: false },
     { id: "refer", label: "Remitida", alignRight: false },
     { id: "civil_servant", label: "Funcionaria", alignRight: false },
     { id: "" },
   ];

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CintilloHeader></CintilloHeader>
        <ResponsiveLayoutRCV
          dataHeadTable={TABLE_HEAD_RCV}
        ></ResponsiveLayoutRCV>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}
