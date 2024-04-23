import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api/API_SNR";
import { getTokenFromlocalStorage } from "../utils/getDataLocalStorage";
import { useState } from "react";

const useUser = () => {
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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
        `${error.response.data.data.error}: ${error.response.data.data.identity_card}`
      );
    },
  });

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
     api.get('/users',config)
    .then(response => response.data.data)
  })

  // const getUsersData = () =>{
    // return api.get('/users',config)
    // .then(response => response)
    // .then(data => console.log(data));
  // }

  return {
    addUserMutation,
    showAlertSuccess,
    setShowAlertSuccess,
    showAlertError,
    setShowAlertError,
    errorMessage,
    // getUsersData
    data,
    isPending,
    error
  };
};

export default useUser;
 //return api.get("users", config).then((res) => res.json());