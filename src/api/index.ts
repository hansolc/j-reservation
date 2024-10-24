interface registrationInfoProps {
  email: string;
  password: string;
}

export const registrationByUserInfo = async ({
  email,
  password,
}: registrationInfoProps) => {
  const res = await fetch("https://hansoltest.free.beeceptor.com/todos", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const json = await res.json();
  return json;
};
