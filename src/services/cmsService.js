import axios from "axios";
import auth from "./authentication";
const baseURL = "http://localhost:8000/api";

const CreateProduct = (data) => {
  return axios.post(`${baseURL}/product/create`, data, { auth: auth });
};
const UpdateProduct = (data, productId, userId) => {
  return axios.put(`${baseURL}/product/${productId}/${userId}`, data, {
    auth: auth,
  });
};
const PostReview = (data, id) => {
  return axios.patch(`${baseURL}/product/review/${id}`, data, { auth: auth });
};
const getProduct = () => {
  return axios.get(`${baseURL}/product`, { auth: auth });
};
const getProductById = (id) => {
  return axios.get(`${baseURL}/product/${id}`, { auth: auth });
};
const getProductByFitnessType = (id) => {
  return axios.get(`${baseURL}/product/fitnessType/${id}`, { auth: auth });
};
const getProductByCity = (id) => {
  return axios.get(`${baseURL}//product/city/${id}`, { auth: auth });
}; 

export {
  CreateProduct,
  UpdateProduct,
  getProduct,
  getProductById,
  getProductByFitnessType,
  PostReview,
  getProductByCity,
};
