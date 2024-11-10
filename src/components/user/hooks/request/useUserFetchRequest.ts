"use client";

import { getInquiriesByUser } from "@/api/service/inquiry";
import { useAuth } from "@/components/common/AuthContext";
import { ServerFetchRequestProps } from "@/types/request";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";

const useUserFetchRequest = () => {
  const { userId } = useAuth();
  const { data = [], isLoading } = useQuery({
    queryKey: ["user_fetch_request", userId],
    queryFn: () => getInquiriesByUser(userId),
    enabled: !!userId,
  });

  return {
    requestList: data,
    isLoading,
  };
};

export default useUserFetchRequest;
