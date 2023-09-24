import CintilloHeader from "./CintilloHeader";
import Footer from "./Footer";
import HeaderDrawer from "./HeaderDrawer";

// eslint-disable-next-line react/prop-types
export default function PageTemplate({children}) {
  return (
    <>
      <CintilloHeader></CintilloHeader>
      <HeaderDrawer></HeaderDrawer>
      {children}
      <Footer></Footer>
    </>
  );
}
