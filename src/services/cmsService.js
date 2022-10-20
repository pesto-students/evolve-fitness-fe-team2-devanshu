import axios from "axios";
import auth from "./authentication";
const baseURL = "https://evlovefitness.onrender.com/api";

const CreateProduct = (data, id) => {
  return axios.post(`${baseURL}/product/create/${id}`, data, { auth: auth });
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
const getProductByFitnessType = (id, city) => {
  return axios.get(`${baseURL}/product/fitnessType/${city}/${id}`, {
    auth: auth,
  });
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
