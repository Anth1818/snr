import CintilloHeader from "../components/CintilloHeader/CintilloHeader";
import { useParams } from "react-router-dom";

// import Footer from "../components/Footer/Footer";
import ResponsiveLayoutForm0800Edit from "../components/ResponsiveLayout/ResponsiveLayoutForm0800Edit.jsx";

// TODO remove, this demo shouldn't need to reset the theme.

export default function PageForm0800Edit() {
  const { caseId } = useParams();
  // const {data} = useLocalStorageData('datosGuardados', caseId);

  return (
    <>
      <CintilloHeader></CintilloHeader>
      <ResponsiveLayoutForm0800Edit
        caseId={caseId}
      ></ResponsiveLayoutForm0800Edit>
    </>
  );
}
