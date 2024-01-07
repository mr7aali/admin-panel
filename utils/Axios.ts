import axios from "axios";

export const AxiosService = axios.create({
    baseURL: "https://star-tech-back-end.vercel.app",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });