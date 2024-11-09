import { getAllInquiresByAdmin } from "@/api/service/inquiry";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";

const useFetchRequest = () => {
  // useSuspenseQuery
  const { data: requestList = [], isLoading } = useQuery({
    queryKey: ["admin_request_fetch_all"],
    queryFn: () => getAllInquiresByAdmin(),
  });

  const responseList: { [key: number]: string } = useMemo(() => {
    const res = requestList.reduce((acc, v) => {
      if (v.responseContent) {
        acc[v.id] = v.responseContent;
      }
      return acc;
    }, {} as { [key: number]: string });
    return res;
  }, [requestList]);

  return {
    requestList,
    isLoading,
    responseList,
  };
};

export default useFetchRequest;
