"use client";

import useFetchRequest from "@/components/admin/hooks/useFetchRequest";
import React from "react";

const RequestView = () => {
  const { data } = useFetchRequest();
  return <div>RequestView</div>;
};

export default RequestView;
