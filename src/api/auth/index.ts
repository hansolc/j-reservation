import { AuthProps } from "@/types/auth";
import { API_URL } from "@/constant";
import { myFetch } from "@/utils/api";

export const registrationByUserInfo = async ({ email, password }: AuthProps) =>
  myFetch.post({ url: `${API_URL}/join`, body: { email, password } });

export const login = async ({ email, password }: AuthProps) =>
  myFetch.post({ url: `${API_URL}/login`, body: { email, password } });
