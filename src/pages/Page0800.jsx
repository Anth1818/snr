import CintilloHeader from "../components/CintilloHeader/CintilloHeader";
import Footer from "../components/Footer";
import { ResponsiveLayout0800 } from "../components/ResponsiveLayout";

export default function Page0800() {
  const TABLE_HEAD_0800 = [
    { id: "caseId", label: "Número de caso", alignRight: false },
    { id: "date", label: "Fecha", alignRight: false },
    { id: "location", label: "Ubicación", alignRight: false },
    { id: "user", label: "Usuario", alignRight: false },
    { id: "status", label: "Estatus", alignRight: false },
    { id: "" },
  ];

  return (
    <>
      <CintilloHeader></CintilloHeader>
      <ResponsiveLayout0800
        dataHeadTable={TABLE_HEAD_0800}
      ></ResponsiveLayout0800>
      {/* <Footer></Footer> */}
    </>
  );
}
