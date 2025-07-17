import axios from "axios";

const apiProduit = axios.create({
  baseURL: "http://localhost:5000/api",
});

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

const apiCommande = axios.create({
  baseURL: "http://localhost:4000/api",
});

export { apiProduit, apiClient, apiCommande };
