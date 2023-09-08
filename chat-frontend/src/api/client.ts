import axios from "axios";
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.aga.live",
});
client.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers!.Authorization = `Token ${localStorage.getItem("token")}`;
  }
  return config;
});

export default client;
