// eslint-disable-next-line @typescript-eslint/no-unused-vars
const API_URL = "http://localhost:8080";

interface registrationInfoProps {
  email: string;
  password: string;
}

export const registrationByUserInfo = async ({
  email,
  password,
}: registrationInfoProps) => {
  const res = await fetch(`${API_URL}/join/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return res;
};
