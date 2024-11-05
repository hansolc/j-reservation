"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import ReservationList from "./ReservationList";

const AdminBoardPage = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  return <>{category === "reservation" && <ReservationList />}</>;
};

export default AdminBoardPage;
