import { AuthProps, RegistrationSubmit } from "@/types/auth";
import endpoint from "../apiConfig";
import axios, { AxiosResponse } from "axios";
import { createAxiosInstance } from "@/utils/api";
import { PROXY_PATH } from "@/constant";

// const authAxios = axios.create({ baseURL: "/api/v2/" });
const authAxios = createAxiosInstance({ baseUrl: `${PROXY_PATH}/` });

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
  return { res, role };
};

export { loginUser, regis };
