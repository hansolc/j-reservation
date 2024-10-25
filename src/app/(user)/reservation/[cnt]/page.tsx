import Button from "@/components/user/button";
import ReservationManager from "@/components/user/reservation/ReservationManager";
import Link from "next/link";
import React from "react";

const ReservationAddPage = ({ params }: { params: { cnt: number } }) => {
  const { cnt } = params;
  return (
    <>
      <div>{cnt}번째 예약</div>
      <ReservationManager />
      <Link href="/reservation/success">
        <Button color="primary" size="full">
          확인
        </Button>
      </Link>
    </>
  );
};

export default ReservationAddPage;
