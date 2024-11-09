import { responseInquiryByAdmin } from "@/api/service/inquiry";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const usePostRequest = ({
  responseList,
}: {
  responseList: { [key: number]: string };
}) => {
  const [responseContent, setResponseContent] = useState<{
    [key: number]: string;
  }>(responseList);

  const handleResponse = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number
  ) => {
    setResponseContent((prevState) => {
      return {
        ...prevState,
        [id]: e.target.value,
      };
    });
  };

  const { mutate: responseRequest } = useMutation({
    mutationFn: ({ requestId }: { requestId: number }) => {
      const id = Number(requestId);
      const formData = {
        responseContent: responseContent[id],
      };
      return responseInquiryByAdmin(requestId, formData);
    },
    onSuccess: () => {
      toast.success("문의 답변 성공!");
    },
  });

  return {
    handleResponse,
    responseContent,
    responseRequest,
  };
};

export default usePostRequest;
