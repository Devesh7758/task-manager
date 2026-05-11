import axios from "axios";

const API = axios.create({
  baseURL:
    "https://task-manager-a40n.onrender.com/api",
});

export default API;