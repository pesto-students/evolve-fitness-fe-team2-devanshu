import axios from "axios";
import auth from "./authentication";
const baseURL = "http://localhost:8000/api";

const CreateProduct = (data) => {
  return axios.post(`${baseURL}/product/create`, data);
};

const getProduct = () => {
  return axios.get(`${baseURL}/product`, { auth: auth });
};
const getProductById = (id) => {
  console.log("getProductById", auth, id);
  return axios.get(`${baseURL}/product/${id}`, { auth: auth });
};
const getProductByFitnessType = (id) => {
  return axios.get(`${baseURL}/product/fitnessType/${id}`, { auth: auth });
};

export { CreateProduct, getProduct, getProductById, getProductByFitnessType };
