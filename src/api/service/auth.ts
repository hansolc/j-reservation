import { AuthProps } from "@/types/auth";
import endpoint from "../apiConfig";
import axios, { AxiosHeaders } from "axios";
import { API_URL } from "@/constant";

const authAxios = axios.create({ baseURL: API_URL });

const loginUser = async ({ email, password }: AuthProps): Promise<number> => {
  const res = await authAxios.post(endpoint.login, { email, password });
  const headers = res.headers;
  if (headers instanceof AxiosHeaders && headers.has("Authorization")) {
    localStorage.setItem("jwToken", headers["Authorization"]);
  }
  return res.data.userId;
};

const registration = async (role: "admin" | "user") => {
  const res = await authAxios.post(`${endpoint.registration}/${role}`);
  return res.data;
};

export { loginUser, registration };
