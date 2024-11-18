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

  return { createReservation };
};

export default useReservation;
