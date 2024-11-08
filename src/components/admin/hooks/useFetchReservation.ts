"use client";

import { getAllReservationByAdmin } from "@/api/service/reservation";
import { ReservationAdminData } from "@/types/reservation";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";

const useFetchReservation = () => {
  const { data: dataFormServer, isLoading } = useQuery({
    queryKey: ["admin_reservation_view"],
    queryFn: () => getAllReservationByAdmin(),
  });

  const data: Array<ReservationAdminData> = useMemo(() => {
    if (dataFormServer && dataFormServer.length) {
      return dataFormServer.map((data) => {
        return {
          id: data.reservationId,
          link: data.restaurant_link,
          adults: data.adult_count,
          kids: data.child_count,
          status: data.status,
          primaryDateTime: data.primary_date_time,
          createdAt: data.createdAt,
          userId: data.userId,
          username: data.username,
          ...(data.secondary_date_time
            ? { secondaryDateTime: data.secondary_date_time }
            : {}),
          ...(data.tertiary_date_time
            ? { tertiaryDateTime: data.tertiary_date_time }
            : {}),
          ...(data.available_date_time
            ? { availableDateTime: data.available_date_time }
            : {}),
        };
      });
    } else return [];
  }, [dataFormServer]);

  return { data, isLoading };
};

export default useFetchReservation;
