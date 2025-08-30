// src/api/apiClient.js
import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "http://192.168.0.103:8081/api";

const apiClient = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default apiClient;
