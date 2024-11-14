import {
  confirmReservationBuUser,
  createReservationByUser,
  getReservationInfoByUser,
} from "@/api/service/reservation";
import { useAuth } from "@/components/common/AuthContext";
import { ServerReservationProps } from "@/types/reservation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useUserPostReservation = () => {
  const router = useRouter();
  const { userId } = useAuth();

  const { mutate: confirmReservation } = useMutation({
    mutationFn: (id: number) => confirmReservationBuUser(id),
    onSuccess: () => {
      router.replace("/reservation/success/done");
    },
  });

  const { mutate: createReservation } = useMutation({
    mutationFn: (data: ServerReservationProps) => {
      console.log("send data: ", data);
      return createReservationByUser(data, userId);
    },
    // onSuccess: () => {
    //   router.push("/reservation/success");
    // },
  });

  return { confirmReservation, createReservation };
};

export default useUserPostReservation;
