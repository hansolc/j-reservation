import { getAllInquiresByAdmin } from "@/api/service/inquiry";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const useFetchRequest = () => {
  // useSuspenseQuery
  const { data } = useQuery({
    queryKey: ["admin_request_fetch_all"],
    queryFn: () => getAllInquiresByAdmin(),
  });

  return {
    data,
  };
};

export default useFetchRequest;
