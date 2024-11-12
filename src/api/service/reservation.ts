import { PROXY_PATH } from "@/constant";
import { checkToken, createAxiosInstance } from "@/utils/api";
import axios, { AxiosResponse } from "axios";
import endpoint from "../apiConfig";
import {
  ServerReservationProps,
  ServerUpdateReservationProps,
  ServerViewAdminReservationProps,
  ServerViewReservationProps,
} from "@/types/reservation";

const reservationAxios = createAxiosInstance({
  baseUrl: `${PROXY_PATH}/api/`,
  authentication: true,
});
const adminReservationAxios = createAxiosInstance({
  baseUrl: `${PROXY_PATH}/admin/api/`,
  authentication: true,
});

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
