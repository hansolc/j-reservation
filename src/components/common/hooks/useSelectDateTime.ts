import { updateReservationByAdmin } from "@/api/service/reservation";
import {
  FormInfoProps,
  ServerUpdateReservationProps,
} from "@/types/reservation";
import { useMutation } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

const useSelectDateTime = ({
  reservationInfo,
}: {
  reservationInfo: FormInfoProps;
}) => {
  const {
    id,
    status,
    primaryDateTime,
    secondaryDateTime,
    tertiaryDateTime,
    availableDateTime,
  } = reservationInfo;
  const dateTimeArray = [primaryDateTime, secondaryDateTime, tertiaryDateTime];
  const ableStatusList = ["WAITING", "AVAILABLE"];

  const [selectedTime, setSelectedTime] = useState<string>(
    availableDateTime || ""
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    !ableStatusList.includes(status)
  );

  const handleSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  }, []);

  const { mutate: updateReservation } = useMutation({
    mutationFn: () => {
      const formData: ServerUpdateReservationProps = {
        reservationId: id,
        status: "AVAILABLE",
      };
      if (selectedTime === "UNAVAILABLE") {
        formData["status"] = "UNAVAILABLE";
      } else {
        formData["selectedDateTime"] = selectedTime;
      }
      return updateReservationByAdmin(formData);
    },
    onSuccess: (res) => {
      // 예약 불가로 변경 했을 경우
      if (selectedTime === "UNAVAILABLE") setIsDisabled(true);
      toast.success(res);
    },
  });

  return {
    handleSelect,
    selectedTime,
    dateTimeArray,
    ableStatusList,
    updateReservation,
    isDisabled,
  };
};

export default useSelectDateTime;
