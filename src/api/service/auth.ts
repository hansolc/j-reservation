import { AuthProps, RegistrationSubmit } from "@/types/auth";
import endpoint from "../apiConfig";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "@/constant";

const authAxios = axios.create({ baseURL: API_URL });

const loginUser = async ({ username, password }: AuthProps) => {
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);
  const res = await authAxios.post(endpoint.login, data);
  return res;
};

const regis = async ({
  role,
  username,
  password,
}: RegistrationSubmit): Promise<{ res: AxiosResponse; role: string }> => {
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);
  const res = await authAxios.post(`${endpoint.registration}/${role}`, data);
  return { res: res.data, role };
};

export { loginUser, regis };
