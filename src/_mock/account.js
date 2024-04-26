// ----------------------------------------------------------------------

import { useUser } from "../context/userContext";

const user = useUser()
 
const account = {
    displayName: user.name,
    appointment: 'Cargo: Analista',
    department: 'Departamento: 0800',
    photoURL: '/assets/female-user-profile.png',
  };
  
  export default account