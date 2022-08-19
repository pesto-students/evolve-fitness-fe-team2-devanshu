import axios from "axios";
import auth from "./authentication";
const baseURL = "http://localhost:8000/api";

const CreateUser = (data) => {
  return axios.post(`${baseURL}/admin/user`, data, { auth: auth });
};
const GetAdminUser = (userId) => {
  return axios.get(`${baseURL}/admin/user/${userId}`, { auth: auth });
};
const GetProductByOwnerId = (id) => {
  return axios.get(`${baseURL}/product/owner/${id}`, { auth: auth });
};

export { CreateUser, GetAdminUser, GetProductByOwnerId };
