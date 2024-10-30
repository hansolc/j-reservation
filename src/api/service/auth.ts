import { AuthProps } from "@/types/auth";
import endpoint from "../apiConfig";
import axios from "axios";

const loginUser = async ({ email, password }: AuthProps) => {
  const res = await axios.post(endpoint.login, { email, password });
  return res.data;
};

export { loginUser };
