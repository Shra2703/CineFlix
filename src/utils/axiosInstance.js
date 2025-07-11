// src/utils/axiosInstance.js
import axios from "axios";
import { API_OPTIONS } from "../constanst";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: API_OPTIONS.headers,
});

export default axiosInstance;
