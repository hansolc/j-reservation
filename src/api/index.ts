interface registrationInfoProps {
  email: string;
  password: string;
}

export const registrationByUserInfo = async ({
  email,
  password,
}: registrationInfoProps) => {
  const res = await fetch("", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return res;
};

// const handleApiCall = async <T>(apiFunction: () => Promise<Response>) => {
//   setLoading(true);
//   setError(null);
//   try {
//     const response = await apiFunction();

//     // 서버 응답 상태 코드가 성공 범위가 아닌 경우, 직접 에러를 발생시킴
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json() as T;
//     return data;

//   } catch (err) {
//     // 네트워크 에러나 서버 응답 오류를 처리
//     setError((err as Error).message);
//     throw err; // 필요하면 에러를 다시 throw하여 상위에서 처리하게 할 수 있음
//   } finally {
//     setLoading(false);
//   }
// };
