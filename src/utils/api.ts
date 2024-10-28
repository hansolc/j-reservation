import { MyFetchProps } from "@/types/api";
import { Dispatch, SetStateAction } from "react";

const handleApiCall = async <T>(
  apiCall: () => Promise<Response>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>
) => {
  setLoading(true);
  setError(null);
  try {
    const res = await apiCall();

    if (res.ok) {
      const data = (await res.json()) as T;
      return data;
    } else {
      const errJson = await res.json();
      throw {
        status: res.status,
        statusText: res.statusText,
        message: errJson || "unkonwn error",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      setError("network error");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if ((error as any).message) {
      throw error;
    } else {
      console.error(error);
    }
  } finally {
    setLoading(false);
  }
};

const myFetch = {
  get: async ({ url, token }: MyFetchProps) =>
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  post: async ({ url, token, body }: MyFetchProps) =>
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }),
  delete: async ({ url, token }: MyFetchProps) =>
    await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export { handleApiCall, myFetch };
