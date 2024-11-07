import useFetchReservation from "@/components/admin/hooks/useFetchReservation";
import Badge from "@/components/common/badge";
import DateTimeFieldset from "@/components/common/fieldradio";
import { RESERVATION_STATUS } from "@/constant";
import { ReservationAdminData } from "@/types/reservation";
import { getBadgeColor } from "@/utils/reservation";
import React from "react";

const ReservationItem = ({
  reservationInfo,
}: {
  reservationInfo: ReservationAdminData;
}) => {
  return (
    <div className="flex h-16">
      <div className="basis-1/6 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>{reservationInfo.id}</div>
          {/* <div>{reservationInfo.status}</div> */}
          <Badge isRadius color={getBadgeColor(reservationInfo.status)}>
            {RESERVATION_STATUS[reservationInfo.status]}
          </Badge>
        </div>
        <div> {reservationInfo.username}</div>
      </div>
      <div className="basis-4/6 px-3 flex flex-col justify-between">
        <div className="break-all overflow-y-auto h-6 underline">
          {reservationInfo.link}
        </div>
        <div className="flex flex-col">
          {/* <div>{reservationInfo.primaryDateTime}</div> */}
          <DateTimeFieldset reservationInfo={reservationInfo} />
        </div>
      </div>
      <div className="basis-1/6">{reservationInfo.createdAt}</div>
    </div>
  );
};

const ReservationList = ({
  reservationInfos,
}: {
  reservationInfos: Array<ReservationAdminData>;
}) => {
  return (
    <div className="flex flex-col gap-5">
      {reservationInfos.map((info) => {
        return (
          <ReservationItem
            key={`admin_reservation_item_${info.id}`}
            reservationInfo={info}
          />
        );
      })}
    </div>
  );
};

const ReservationView = () => {
  const { data, isLoading } = useFetchReservation();

  if (isLoading) return <p>데이터를 가져오고 있습니다.</p>;
  return <ReservationList reservationInfos={data} />;
};

export default ReservationView;
