import UserTable from "../components/UserTable";
import PageTemplate from "./PageTemplate";

export default function PageRCV() {

  const TABLE_HEAD_RCV = [
    { id: "name_and_last_name", label: "Nombre y Apellido", alignRight: false },
    { id: "date", label: "Fecha", alignRight: false },
    { id: "location", label: "Ubicación", alignRight: false },
    { id: "phone_number", label: "Teléfonos", alignRight: false },
    { id: "refer", label: "Remitida", alignRight: false },
    { id: "civil_servant", label: "Funcionaria", alignRight: false },
    { id: "" },
  ];


  return (
    <>
      <PageTemplate titlePage={"Registro de casos de violencia"}>
        <UserTable dataHeadTable={TABLE_HEAD_RCV} dataTitle={"Lista de mujeres registradas"}></UserTable>
      </PageTemplate>
    </>
  );
}
