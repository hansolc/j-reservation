import { API_URL } from "@/constant";
import { checkToken } from "@/utils/api";
import axios from "axios";
import endpoint from "../apiConfig";
import {
  ServerAdminFetchRequestProps,
  ServerFetchRequestProps,
  ServerPostRequestProps,
} from "@/types/request";

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
  const token = checkToken();
  if (token) {
    req.headers.Authorization = checkToken();
  }
  return req;
});

adminInquiryAxios.interceptors.response.use((res) => res.data);

inquiryAxios.interceptors.response.use((res) => res.data);

const getInquiriesByUser = async (
  userId: number
): Promise<Array<ServerFetchRequestProps>> => {
  return await inquiryAxios.get(`${endpoint.getInquiresUser}/${userId}`);
};

const createInquiryByUser = async (
  userId: number,
  inquiryInfo: ServerPostRequestProps
): Promise<string> => {
  return await inquiryAxios.post(
    `${endpoint.createInquiryUser}/${userId}`,
    inquiryInfo
  );
};

const deleteInquiresByUser = async (inquiryId: number): Promise<string> => {
  return await inquiryAxios.delete(
    `${endpoint.deleteInquiryUser}/${inquiryId}`
  );
};

const getAllInquiresByAdmin = async (): Promise<
  Array<ServerAdminFetchRequestProps>
> => {
  const res = await adminInquiryAxios.get(`${endpoint.getAllInquiresAdmin}`);
  return res.data;
};

const responseInquiryByAdmin = async (
  inquiryId: number,
  responseInfo: { responseContent: string }
): Promise<ServerAdminFetchRequestProps & { responseContent: string }> => {
  return await adminInquiryAxios.post(
    `${endpoint.responseAdmin}/${inquiryId}`,
    responseInfo
  );
};

export {
  getInquiriesByUser,
  createInquiryByUser,
  deleteInquiresByUser,
  getAllInquiresByAdmin,
  responseInquiryByAdmin,
};
