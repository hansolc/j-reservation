import {
  createInquiryByUser,
  deleteInquiresByUser,
} from "@/api/service/inquiry";
import { useAuth } from "@/components/common/AuthContext";
import {
  ServerFetchRequestProps,
  ServerPostRequestProps,
} from "@/types/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

const useUserPostRequest = () => {
  const { userId } = useAuth();
  const queryClient = useQueryClient();
  const [requestInfo, setRequestInfo] = useState<ServerPostRequestProps>({
    title: "",
    content: "",
  });

  const handleRequestInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRequestInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { mutate: createRequest } = useMutation({
    mutationFn: () => createInquiryByUser(userId, requestInfo),
    onSuccess: (res) => {
      // post 요청 성공시 데이터 최신화
      queryClient.invalidateQueries({
        queryKey: ["user_fetch_request", userId],
      });
      toast.success(res);
    },
  });

  const { mutate: deleteRequest } = useMutation({
    mutationFn: (inquiryId: number) => deleteInquiresByUser(inquiryId),
    onSuccess: (res) => {
      toast.success(res);
    },
  });

  return {
    requestInfo,
    createRequest,
    handleRequestInfo,
    deleteRequest,
  };
};

export default useUserPostRequest;
