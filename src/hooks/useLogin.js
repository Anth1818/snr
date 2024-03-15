import api from "../api/API_SNR"
import { useMutation } from "@tanstack/react-query";

export function login(userName, userPassword) {
  return api
    .post("/auth/login", { username: userName, password: userPassword })
    .then((response) => {
      // console.log(response.data.data[0]);
      return response.data.data[0];
    })
    .catch((error) => {
      console.log(error);
      throw error; // Propagar el error para que React Query lo maneje
    });
}

export function useLoginMutation(credentials) {
  return useMutation((credentials) =>
    api
      .post("/auth/login", credentials)
      .then((response) => response.data.data[0])
  );
}
