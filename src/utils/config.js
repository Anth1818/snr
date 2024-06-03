import { getTokenFromlocalStorage } from "./getDataLocalStorage.js";
const tokenLocalStorage = getTokenFromlocalStorage();

export const config = (token) =>{
  
return  {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token || tokenLocalStorage}`,
  },
};

}
