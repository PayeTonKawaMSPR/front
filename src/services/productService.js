// src/services/productService.js
import { apiProduit } from "../utils/axiosConfig";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/produits';

export const getAllProduits = async () => {
  const response = await axios.get(API_URL);
  console.log("Données reçues de l'API :", response.data);
  
  return response?.data?.data  ||  []; 

};
