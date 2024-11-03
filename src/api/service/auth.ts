import { AuthProps, RegistrationSubmit } from "@/types/auth";
import endpoint from "../apiConfig";
import axios from "axios";
import { API_URL } from "@/constant";

const authAxios = axios.create({ baseURL: API_URL });

const loginUser = async ({ username, password }: AuthProps) => {
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);
  const res = await authAxios.post(endpoint.login, data);
  return res;
};

const regis = async ({ role, username, password }: RegistrationSubmit) => {
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);
  const res = await authAxios.post(`${endpoint.registration}/${role}`, data);
  return res.data;
};

export { loginUser, regis };
