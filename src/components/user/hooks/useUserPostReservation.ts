import {
  confirmReservationBuUser,
  getReservationInfoByUser,
} from "@/api/service/reservation";
import { useAuth } from "@/components/common/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useUserPostReservation = ({
  reservationId,
}: {
  reservationId: number;
}) => {
  const router = useRouter();

  const { mutate: confirmReservation } = useMutation({
    mutationFn: () => confirmReservationBuUser(reservationId),
    onSuccess: () => {
      router.replace("/reservation/success/done");
    },
  });

  return { confirmReservation };
};

export default useUserPostReservation;
