import UserTable from "../components/UserTable"
import PageTemplate from "./PageTemplate"

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
      <PageTemplate titlePage={"0800"}>
        <UserTable dataHeadTable={TABLE_HEAD_0800} dataTitle={"Lista de llamadas"}></UserTable>
      </PageTemplate>
    </>
  );
}
