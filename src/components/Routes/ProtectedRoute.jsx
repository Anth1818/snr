import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/userContext";


function ProtectedRoute() {
  const { user, checkTokenLocalStorgare } = useUser();
  const checkToken = checkTokenLocalStorgare()
  const isActive = user?.is_active

  if (isActive === false && !checkToken) {
     return <Navigate to={"/login"} replace />;  
  } else {
   return <Outlet />;
  }
}


export default ProtectedRoute