import { PROXY_PATH } from "@/constant";
import { checkToken, createAxiosInstance } from "@/utils/api";
import axios from "axios";
import endpoint from "../apiConfig";
import {
  ServerAdminFetchRequestProps,
  ServerFetchRequestProps,
  ServerPostRequestProps,
} from "@/types/request";

const inquiryAxios = createAxiosInstance({
  baseUrl: `${PROXY_PATH}/api/`,
  authentication: true,
});
const adminInquiryAxios = createAxiosInstance({
  baseUrl: `${PROXY_PATH}/admin/api/`,
  authentication: true,
});

const getInquiriesByUser = async (
  userId: number
): Promise<Array<ServerFetchRequestProps>> => {
  const res = await inquiryAxios.get(`${endpoint.getInquiresUser}/${userId}`);
  return res.data;
};

const createInquiryByUser = async (
  userId: number,
  inquiryInfo: ServerPostRequestProps
): Promise<ServerPostRequestProps> => {
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
