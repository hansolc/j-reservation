import useFetchReservation from "@/components/admin/hooks/useFetchReservation";
import { ReservationAdminData } from "@/types/reservation";
import React from "react";

const ReservatoinItem = ({
  reservationInfo,
}: {
  reservationInfo: ReservationAdminData;
}) => {
  return (
    <div className="flex">
      <div className="basis-1/6">
        <div className="flex">
          <div>{reservationInfo.id}</div>
          <div>{reservationInfo.status}</div>
        </div>
        <div>{reservationInfo.username}</div>
      </div>
      <div className="basis-4/6 px-3">
        <div className="break-all overflow-y-auto h-6">
          {reservationInfo.link}
        </div>
        <div className="flex">
          <div>{reservationInfo.primaryDateTime}</div>
          <div>예약불가</div>
          <button>변경</button>
        </div>
      </div>
      <div className="basis-1/6">{reservationInfo.createdAt}</div>
    </div>
  );
};

const ReservationList = () => {
  const { data, isLoading } = useFetchReservation();
  console.log(data);

  if (isLoading) return <p>데이터를 가져오고 있습니다.</p>;
  return (
    <>
      {data.map((d, idx) => {
        return <ReservatoinItem key={idx} reservationInfo={d} />;
      })}
    </>
  );
};

export default ReservationList;

// [
//     {
//         "reservationId": 1,
//         "restaurant_link": "http://restaurant.com",
//         "adult_count": 2,
//         "child_count": 1,
//         "primary_date_time": "2024-11-01T18:00:00",
//         "secondary_date_time": "2024-11-02T18:00:00",
//         "tertiary_date_time": "2024-11-03T18:00:00",
//         "available_date_time": "2024-10-27T11:55:19.521248",
//         "status": "AVAILABLE",
//         "createdAt": "2024-10-27T11:52:28.592316",
//         "userId": 1,
//         "username": "jms"
//     },
//     {
//         "reservationId": 2,
//         "restaurant_link": "http://restaurant.com",
//         "adult_count": 2,
//         "child_count": 1,
//         "primary_date_time": "2024-11-01T18:00:00",
//         "secondary_date_time": "2024-11-02T18:00:00",
//         "available_date_time": "2024-11-01T18:00:00",
//         "status": "AVAILABLE",
//         "createdAt": "2024-10-27T11:52:36.629787",
//         "userId": 1,
//         "username": "jms"
//     }
// ]
