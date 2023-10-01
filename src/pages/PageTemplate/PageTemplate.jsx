import CintilloHeader from "../../components/CintilloHeader/CintilloHeader";
import Footer from "../../components/Footer/Footer";
import HeaderDrawer from "../../components/HeaderDrawer/HeaderDrawer";

// eslint-disable-next-line react/prop-types
export default function PageTemplate({ children, titlePage }) {
  return (
    <>
        <CintilloHeader></CintilloHeader>
        <HeaderDrawer titlePage={titlePage}></HeaderDrawer>
        {children}
        {/* <Footer></Footer> */}
    
    </>
  );
}
