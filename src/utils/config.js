import { getTokenFromlocalStorage } from "../utils/getDataLocalStorage";
const token = getTokenFromlocalStorage();

const  config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  export default config