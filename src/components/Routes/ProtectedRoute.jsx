import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";


function ProtectedRoute() {
  const { user, checkTokenLocalStorgare } = useUser();
  const checkToken = checkTokenLocalStorgare()
 
  if (!user && !checkToken) {
     return <Navigate to={"/login"} replace />;  
  } else {
   return <Outlet />;
  }
}


export default ProtectedRoute