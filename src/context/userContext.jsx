import { createContext, useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/API_SNR";
import { saveTokenLocalStorage, removeTokenLocalStorage } from "../utils/saveDataLocalStorage";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

// Crear un contexto para almacenar los datos del usuario
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();
  // const [open,setOpen] = useState(false);

  const loginMutation = useMutation({
    mutationFn: (credentials) => {
      return api.post("/auth/login", credentials);
    },

    onSuccess: async ({ data }) => {
      await setUser(data?.data?.[0]);
      await saveTokenLocalStorage(data.tokenSession);
    },
    onError: (error) => {
      console.error("Error en la mutación:", error);
    },
  });

  const loginUser = async (credentials) => {
    await loginMutation.mutateAsync(credentials);
  };

  const logoutUser = () => {
    setUser(null);
    queryClient.clear();
    removeTokenLocalStorage()// Limpiar todas las consultas en caché cuando el usuario cierra sesión
  };

  const checkTokenLocalStorgare = () =>{
    return localStorage.getItem("token"); 
  }
  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, checkTokenLocalStorgare}}>
      {children}
    </UserContext.Provider>
  );
};
