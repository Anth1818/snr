import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000/api/1.0",
});

export default api