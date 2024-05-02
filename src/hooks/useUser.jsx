import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api/API_SNR";
import { getTokenFromlocalStorage } from "../utils/getDataLocalStorage";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useUser = () => {
  const { userId } = useParams();
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const token = getTokenFromlocalStorage();

  // Configuracion del header con el token JWT
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const addUserMutation = useMutation({
    mutationFn: (values) => {
      console.log(values);
      return api.put("/users", values, config);
    },
    onSuccess: async ({ data }) => {
      setShowAlertSuccess(true);
      console.log(data);
    },
    onError: async (error) => {
      console.error("Error en la mutación:", error);
      setShowAlertError(true);
      setErrorMessage(
        `${error.response.data.data.error}: ${
          error.response.data.data.identity_card === undefined
            ? error.response.data.data.username
            : error.response.data.data.identity_card
        }`
      );
    },
  });

  const { isPending, error, data, isSuccess} = useQuery({
    queryKey: ["repoData"],
    queryFn: async () =>{
      const data = await api.get("/users", config)
      return data.data.data
    }
   
  });

  const {
    isPending: isPendingUserEdit,
    error: errorUserEdit,
    data: dataUserEdit,
    isSuccess: successDataEdit
  } = useQuery({
    queryKey: ["repoDataUserEdit"],
    queryFn: () => {
      if (userId) {
        return api
          .get(`/users/${userId}`, config)
          .then((response) => response.data.data[0]);
      } else {
        return null; 
      }
    },
  });


  return {
    addUserMutation,
    showAlertSuccess,
    setShowAlertSuccess,
    showAlertError,
    setShowAlertError,
    errorMessage,
    data,
    isPending,
    error,
    isSuccess,
    isPendingUserEdit,
    errorUserEdit,
    dataUserEdit,
    successDataEdit
  };
};

export default useUser;
