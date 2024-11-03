import { API_URL } from "@/constant";
import { checkToken } from "@/utils/api";
import axios from "axios";
import endpoint from "../apiConfig";

const inquiryAxios = axios.create({
  baseURL: `${API_URL}/api/`,
});

inquiryAxios.interceptors.request.use((req) => {
  req.headers.Authorization = checkToken();
  return req;
});

inquiryAxios.interceptors.response.use((res) => res.data);

const adminInquiryAxios = axios.create({
  baseURL: `${API_URL}/admin/api/`,
});

adminInquiryAxios.interceptors.request.use((req) => {
  req.headers.Authorization = checkToken();
  return req;
});

adminInquiryAxios.interceptors.response.use((res) => res.data);

inquiryAxios.interceptors.response.use((res) => res.data);

const getInquiriesByUser = async (userId: number) => {
  return await inquiryAxios.get(`${endpoint.getInquiresUser}/${userId}`);
};

const createInquiryByUser = async (userId: number) => {
  return await inquiryAxios.post(`${endpoint.createInquiryUser}/${userId}`);
};

const deleteInquiresByUser = async (userId: number) => {
  return await inquiryAxios.delete(`${endpoint.deleteInquiryUser}/${userId}`);
};

const getAllInquiresByAdmin = async () => {
  return await adminInquiryAxios.get(`${endpoint}`);
};

const responseInquiryByAdmin = async (inquiryId: number) => {
  return await adminInquiryAxios.post(`${endpoint.responseAdmin}/${inquiryId}`);
};

export {
  getInquiriesByUser,
  createInquiryByUser,
  deleteInquiresByUser,
  getAllInquiresByAdmin,
  responseInquiryByAdmin,
};
