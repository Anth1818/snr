import CintilloHeader from "../components/CintilloHeader/CintilloHeader";

// import Footer from "../components/Footer";
import ResponsiveLayoutRCV from "../components/ResponsiveLayout/ResponsiveLayoutRCV";


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
     { id: "" },
   ];

  return (
    <>  
        <CintilloHeader></CintilloHeader>
        <ResponsiveLayoutRCV
          dataHeadTable={TABLE_HEAD_RCV}
        ></ResponsiveLayoutRCV>
    </>
  );
}
