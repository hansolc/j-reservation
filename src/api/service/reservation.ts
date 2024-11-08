import { API_URL } from "@/constant";
import { checkToken } from "@/utils/api";
import axios, { AxiosResponse } from "axios";
import endpoint from "../apiConfig";
import {
  ServerReservationProps,
  ServerUpdateReservationProps,
  ServerViewAdminReservationProps,
  ServerViewReservationProps,
} from "@/types/reservation";

const reservationAxios = axios.create({ baseURL: `${API_URL}/api/` });
reservationAxios.interceptors.request.use((req) => {
  req.headers.Authorization = checkToken();
  return req;
});

reservationAxios.interceptors.response.use((res) => res.data);

const adminReservationAxios = axios.create({
  baseURL: `${API_URL}/admin/api/`,
});
adminReservationAxios.interceptors.request.use((req) => {
  req.headers.Authorization = checkToken();
  return req;
});
adminReservationAxios.interceptors.response.use((res) => res.data);

const createReservationByUser = async (
  data: ServerReservationProps,
  userId: number
) => {
  return await reservationAxios.post(
    `${endpoint.createReservation}/${userId}`,
    data
  );
};

const confirmReservationBuUser = async (reservationId: number) => {
  return await reservationAxios.post(
    `${endpoint.confirmReservation}/${reservationId}`
  );
};

const getReservationInfoByUser = async (
  userId: number
): Promise<Array<ServerViewReservationProps>> => {
  const res = await reservationAxios.get(
    `${endpoint.getReservationUser}/${userId}`
  );
  return res.data;
};

const getAllReservationByAdmin = async (): Promise<
  Array<ServerViewAdminReservationProps>
> => {
  return await adminReservationAxios.get(`${endpoint.getReservationAdmin}`);
};

const updateReservationByAdmin = async (
  formData: ServerUpdateReservationProps
): Promise<string> => {
  return await adminReservationAxios.post(
    `${endpoint.updatereservationAdmin}`,
    formData
  );
};

export {
  createReservationByUser,
  confirmReservationBuUser,
  getReservationInfoByUser,
  getAllReservationByAdmin,
  updateReservationByAdmin,
};
