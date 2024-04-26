import { createContext, useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/API_SNR";
import { saveTokenLocalStorage, removeTokenLocalStorage, removeUserRolLocalStorage, saveUserDataLocalStorage} from "../utils/saveDataLocalStorage";

// Crear un contexto para almacenar los datos del usuario
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (credentials) => {
      return api.post("/auth/login", credentials);
    },

    onSuccess: async ({ data }) => {
      await setUser(data?.data?.[0]);
      await saveTokenLocalStorage(data.tokenSession)
      await saveUserDataLocalStorage(JSON.stringify(data?.data?.[0]))
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
    removeTokenLocalStorage()
    removeUserRolLocalStorage()
    // Limpiar todas las consultas en caché cuando el usuario cierra sesión
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
