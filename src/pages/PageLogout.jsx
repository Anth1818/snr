import { useEffect } from "react";
import Logout from "../components/Logout/Logout.jsx";
import { useUser} from "../context/userContext.jsx"

export default function PageLogout() {

  const {logoutUser} = useUser()

  useEffect(()=>{
    logoutUser()
  },[logoutUser])
  
  return (
     <Logout></Logout>
  );
}
