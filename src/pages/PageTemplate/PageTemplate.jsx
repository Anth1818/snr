import CintilloHeader from "../../components/CintilloHeader/CintilloHeader";
// import Footer from "../../components/Footer";
import RenderDrawer from "../../components/Drawer";

// eslint-disable-next-line react/prop-types
export default function PageTemplate({ children, titlePage }) {
  return (
    <>
      <CintilloHeader></CintilloHeader>
      <RenderDrawer titlePage={titlePage}></RenderDrawer>
      {children}
      {/* <Footer></Footer> */}
    </>
  );
}
