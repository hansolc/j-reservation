import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const useLoggedIn = () => {
  try {
    const token = cookies().get("jwToken");
    if (token) {
      const { userId }: { userId: number } = jwtDecode(token.value);
      return {
        isLoggedIn: true,
        userId: userId,
      };
    } else {
      return {
        isLoggedIn: false,
      };
    }
  } catch (error) {
    return {
      isLoggedIn: false,
    };
  }
};

export default useLoggedIn;
