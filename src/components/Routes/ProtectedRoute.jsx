import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";


function ProtectedRoute() {
  const { user, checkTokenLocalStorgare } = useUser();
  
  if (!user && checkTokenLocalStorgare === "undefined") {
     return <Navigate to={"/login"} replace />;  
  } else {
   return <Outlet />;
  }
}


export default ProtectedRoute