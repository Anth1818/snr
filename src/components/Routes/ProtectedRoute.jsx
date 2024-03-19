import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";


function ProtectedRoute() {
  const { user } = useUser();
  
  if (!user) {
     return <Navigate to={"/login"} replace />;  
  } else {
   return <Outlet />;
  }
}


export default ProtectedRoute