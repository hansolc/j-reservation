"use client";

import { ServerReservationProps } from "@/types/reservation";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { createReservationByUser } from "@/api/service/reservation";
import { useAuth } from "@/components/common/AuthContext";

const useReservation = () => {
  const router = useRouter();
  const { userId } = useAuth();

  const { mutate: createReservation } = useMutation({
    mutationFn: (data: ServerReservationProps) => {
      console.log("send data: ", data);
      return createReservationByUser(data, userId);
    },
    onSuccess: () => {
      router.push("/reservation/success");
    },
  });

  // useQuery 사용시 홈페이지에서 사용하는 ReservationForm이 사용되고 컴포넌트가 마운트되며
  // 로그인 후 이 쿼리가 실행되고 있다. 따라서 이 로직을 분리하거나
  // enabled값을 통해 언제 이 쿼리를 실행할지에 대한 생각 필요
  // const { data: userReservationList } = useQuery({
  //   queryKey: ["reseration", userId],
  //   queryFn: () => getReservationInfoByUser(userId),
  //   enabled: !!userId,
  //   staleTime: 0,
  // });

  return { createReservation };
};

export default useReservation;
