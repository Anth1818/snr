import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api/API_SNR";
import config from "../utils/config";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useUser = () => {
  const { userId } = useParams();
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
 

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
        `${error.response.data.error.msg}
        `
      );
    },
  });


  // const getUserById = useQuery({
  //   queryKey: ["repoDataUserEdit"],
  //   queryFn: () => {
  //       return api
  //         .get(`/users/${userId}`, config)
  //         .then((response) => response.data.data[0]);
     
  //   },
  //   onSuccess: async (data) =>{
  //     return data
  //   },
  //   onError: (error) =>{
  //     return error
  //   }
  // })


  return {
    addUserMutation,
    showAlertSuccess,
    setShowAlertSuccess,
    showAlertError,
    setShowAlertError,
    errorMessage,
   
  };
};

export default useUser;
