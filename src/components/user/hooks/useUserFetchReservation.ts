"use client";

import { getReservationInfoByUser } from "@/api/service/reservation";
import { useAuth } from "@/components/common/AuthContext";
import {
  FormInfoProps,
  ServerViewAdminReservationProps,
  ServerViewReservationProps,
} from "@/types/reservation";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useCallback, useMemo } from "react";

interface UseUserFetchReservationProps {
  forceFetch?: boolean;
  reservationId?: number;
}

const useUserFetchReservation = ({
  forceFetch = false,
  reservationId,
}: UseUserFetchReservationProps = {}) => {
  const { userId } = useAuth();

  const { data: serverData, isLoading } = useQuery({
    queryKey: ["reservation", userId],
    queryFn: () => getReservationInfoByUser(userId),
    enabled: !!userId,
    refetchOnMount: true,
    staleTime: 0,
    // ...(forceFetch
    //   ? { staleTime: 0, refetchOnMount: true, refetchOnWindowFocus: true }
    //   : {}),
  });

  const reformServerDataToClient = useCallback(
    (d: ServerViewReservationProps) => {
      return {
        adults: d.adult_count,
        kids: d.child_count,
        id: d.reservationId,
        link: d.restaurant_link,
        status: d.status,
        primaryDateTime: d.primary_date_time,
        ...(d.secondary_date_time
          ? { secondaryDateTime: d.secondary_date_time }
          : {}),
        ...(d.tertiary_date_time
          ? { tertiaryDateTime: d.tertiary_date_time }
          : {}),
        ...(d.available_date_time
          ? { availableDateTime: d.available_date_time }
          : {}),
      };
    },
    []
  );

  const reformedDataArray: Array<FormInfoProps> | undefined = useMemo(() => {
    if (serverData) {
      const res = serverData.map((d) => reformServerDataToClient(d));
      return res;
    }
    return undefined;
  }, [serverData, reformServerDataToClient]);

  // query params을 통해 훅의 props로 reservation id를 받아와 useQuery을 통해 받은 데이터에서 찾기
  const specificReservationInfo = useMemo(() => {
    if (reservationId && reformedDataArray) {
      return reformedDataArray.find((r) => {
        return r.id === reservationId;
      });
    }
    return undefined;
  }, [reservationId, reformedDataArray]);

  return {
    data: reformedDataArray,
    isLoading,
    specificReservationInfo,
  };
};

export default useUserFetchReservation;
