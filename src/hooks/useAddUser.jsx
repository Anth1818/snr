import { useMutation } from "@tanstack/react-query";
import api from "../api/API_SNR";
import { getTokenFromlocalStorage } from "../utils/getDataLocalStorage";
import { useState } from "react";


const useAddUser = () => {
  const [showAlert, setShowAlert] = useState(false);
     // Define el token JWT aquí
     const token = getTokenFromlocalStorage();

     // Configura los headers con el token JWT
     const config = {
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
     };

  const addUserMutation = useMutation({
    mutationFn: (values) =>{
        console.log(values,)
        return api.put("/users", values, config)
    },
    onSuccess: async ({ data }) => {
      setShowAlert(true)
       console.log(data)
      },
      onError: (error) => {
        console.error("Error en la mutación:", error);
      },
    })
    return {addUserMutation, showAlert, setShowAlert }

};

export default useAddUser;
