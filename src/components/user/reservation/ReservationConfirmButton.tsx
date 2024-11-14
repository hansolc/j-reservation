import { FormInfoProps, ReservationStatus } from "@/types/reservation";
import { useRouter } from "next/navigation";
import useUserPostReservation from "../hooks/useUserPostReservation";
import { isostringToDateTime } from "@/utils/reservation";
import Button from "../button";

const ReservationConfirmButton = ({
  id,
  status,
  nth,
  dateTime,
}: {
  id: number;
  status: ReservationStatus;
  nth: number;
  dateTime: string;
}) => {
  const router = useRouter();
  const { confirmReservation } = useUserPostReservation();

  const handleClick = () => {
    if (window.location.pathname.includes("check")) {
      router.push(`/reservation/verify?reservationId=${id}&nth=${nth}`);
    } else if (window.location.pathname.includes("verify")) {
      confirmReservation(id, {
        onSuccess: () => router.replace("/reservation/success/done"),
      });
    }
  };

  if (status !== "AVAILABLE") return null;
  return (
    <div className="relative">
      <div className="absolute w-full">
        <Button
          color="primary"
          isRadius
          size="full"
          onClick={handleClick}
          type="button"
        >
          {`${isostringToDateTime(dateTime)} 확정하기`}
        </Button>
      </div>
    </div>
  );
};

export default ReservationConfirmButton;
