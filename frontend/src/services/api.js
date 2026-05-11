import axios from "axios";

const API = axios.create({
  baseURL:
    "https://task-manager-a4on.onrender.com/api",
});

export default API;