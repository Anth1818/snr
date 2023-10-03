import Page0800 from "./pages/Page0800.jsx";
import PageRCV from "./pages/PageRCV.jsx";
import PageOAC from "./pages/PageOAC.jsx";
import PageLogin from "./pages/PageLogin.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/PageNotFound.jsx";
import PageStatistics from "./pages/PageStatistics.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/pages/Page0800" element={<Page0800 />} />
      <Route path="/pages/PageRCV" element={<PageRCV />} />
      <Route path="/pages/PageOAC" element={<PageOAC />} />
      <Route path="/pages/PageStatistics" element={<PageStatistics />} />
      <Route path="/pages/PageLogin" element={<PageLogin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
