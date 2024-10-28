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
    if (!res.ok) {
      const errJson = await res.json();
      throw {
        status: res.status,
        statusText: res.statusText,
        message: errJson,
      };
    }

    const data = (await res.json()) as T;
    return data;
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

export default handleApiCall;
