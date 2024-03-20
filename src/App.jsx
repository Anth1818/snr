import Page0800 from "./pages/Page0800.jsx";
import PageRCV from "./pages/PageRCV.jsx";
import PageOAC from "./pages/PageOAC.jsx";
import PageLogin from "./pages/PageLogin.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/PageNotFound.jsx";
import PageStatistics from "./pages/PageStatistics.jsx";
import PageForm0800 from "./pages/Pageform0800.jsx";
import PageForm0800Edit from "./pages/PageForm0800Edit.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import AddUser from "./pages/AddUser.jsx";
import { UserProvider } from "./context/userContext.jsx";
import ProtectedRoute from "./components/Routes/ProtectedRoute.jsx";
import Logout from "./pages/Logout.jsx";


export default function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/Page0800" element={<Page0800 />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/PageRCV" element={<PageRCV />} />
          <Route path="/PageOAC" element={<PageOAC />} />
          <Route path="/PageStatistics" element={<PageStatistics />} />
          <Route path="/PageForm0800" element={<PageForm0800 />} />
          <Route
            path="/PageForm0800Edit/:caseId"
            element={<PageForm0800Edit />}
          />
        </Route>
          <Route path="/Logout" element={<Logout />} />
        <Route path="/Login" element={<PageLogin />} />
        <Route path="/" element={<PageLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}
