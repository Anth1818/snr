import { getTokenFromlocalStorage } from "./getDataLocalStorage.js";
const token = getTokenFromlocalStorage();

export const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

