import CintilloHeader from "../components/CintilloHeader/CintilloHeader";

// import Footer from "../components/Footer/Footer";
import ResponsiveLayoutOAC from "../components/ResponsiveLayout/ResponsiveLayoutOAC";
// TODO remove, this demo shouldn't need to reset the theme.

export default function PageOAC() {
  return (
    <>
      <CintilloHeader></CintilloHeader>
      <ResponsiveLayoutOAC></ResponsiveLayoutOAC>
    </>
  );
}
