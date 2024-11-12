// const handleApiCall = async <T>(
//   apiCall: () => Promise<Response>,
//   setLoading: Dispatch<SetStateAction<boolean>>,
//   setError: Dispatch<SetStateAction<string | null>>
// ) => {
//   setLoading(true);
//   setError(null);
//   try {
//     const res = await apiCall();

import axios, { AxiosInstance } from "axios";

//     if (res.ok) {
//       const data = (await res.json()) as T;
//       return data;
//     } else {
//       const errJson = await res.json();
//       throw {
//         status: res.status,
//         statusText: res.statusText,
//         message: errJson || "unkonwn error",
//       };
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(error);
//       setError("network error");
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } else if ((error as any).message) {
//       throw error;
//     } else {
//       console.error(error);
//     }
//   } finally {
//     setLoading(false);
//   }
// };

// const myFetch = {
//   get: async ({ url, token }: MyFetchProps) =>
//     await fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }),
//   post: async ({ url, token, body }: MyFetchProps) =>
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(body),
//     }),
//   delete: async ({ url, token }: MyFetchProps) =>
//     await fetch(url, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }),
// };

const checkToken = () => localStorage.getItem("jwToken") ?? false;

const createAxiosInstance = ({
  baseUrl,
  authentication,
}: {
  baseUrl: string;
  authentication?: boolean;
}): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  if (authentication) {
    axiosInstance.interceptors.request.use((req) => {
      req.headers.Authorization = checkToken();
      return req;
    });
  }

  axiosInstance.interceptors.response.use((res) =>
    // need to access Response.headers when regis/login
    authentication ? res.data : res
  );

  return axiosInstance;
};

export {
  // handleApiCall,
  // myFetch,
  checkToken,
  createAxiosInstance,
};
