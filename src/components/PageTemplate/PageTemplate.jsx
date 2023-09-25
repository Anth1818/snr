import CintilloHeader from "../CintilloHeader/CintilloHeader";
import Footer from "../Footer/Footer";
import HeaderDrawer from "../HeaderDrawer/HeaderDrawer";

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
