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
      throw new Error(`error occured: `);
    }
    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    setError((error as Error).message);
  } finally {
    setLoading(false);
  }
};

export default handleApiCall;
