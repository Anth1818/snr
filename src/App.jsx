import Page0800 from "./pages/Page0800.jsx";
import PageRCV from "./pages/PageRCV.jsx";
import PageOAC from "./pages/PageOAC.jsx";
import PageLogin from "./pages/PageLogin.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/PageNotFound.jsx";
import PageStatistics from "./pages/PageStatistics.jsx";
import PageForm0800 from "./pages/Pageform0800.jsx";
import PageForm0800Edit from "./pages/PageForm0800Edit.jsx";
import AddUser from "./pages/AddUser.jsx";
import { UserProvider } from "./context/userContext.jsx";
import ProtectedRoute from "./components/Routes/ProtectedRoute.jsx";
import PageLogout from "./pages/PageLogout.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import PageUser from "./pages/PageUser.jsx";
import PageEditUser from "./pages/PageEditUser.jsx";
import PageViewProfile from "./pages/PageViewProfile.jsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Routes>
          <Route element={<ProtectedRoute /> }>
            <Route path="/Page0800" element={<Page0800 />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/PageUser" element={<PageUser />} />
            <Route path="/PageRCV" element={<PageRCV />} />
            <Route path="/PageOAC" element={<PageOAC />} />
            <Route path="/PageStatistics" element={<PageStatistics />} />
            <Route path="/PageForm0800" element={<PageForm0800 />} />
            <Route path="/EditUser/:userId" element={<PageEditUser />} />
            <Route path="/PageViewProfile/:userId" element={<PageViewProfile />} />
            <Route
              path="/PageForm0800Edit/:caseId"
              element={<PageForm0800Edit />}
            />
          </Route>
          <Route path="/Logout" element={<PageLogout />} />
          <Route path="/Login" element={<PageLogin />} />
          <Route path="/" element={<PageLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </ThemeProvider>
  );
}
