import axios from "axios";
const baseURL = "http://localhost:8000/api";

const CreateProduct = (data) => {
  return axios.post(`${baseURL}/product/create`, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

const getProduct = () => {
  return axios.get(`${baseURL}/product`);
};
const getProductById = (id) => {
  return axios.get(`${baseURL}/product/${id}`);
};
const getProductByFitnessType = (id) => {
  return axios.get(`${baseURL}/product/fitnessType/${id}`);
};

export { CreateProduct, getProduct, getProductById, getProductByFitnessType };
