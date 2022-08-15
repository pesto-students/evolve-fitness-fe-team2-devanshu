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

export { CreateProduct, getProduct };
