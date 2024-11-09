"use client";

import AbsoluteIcon from "@/components/common/AbsoluteIcon";
import DeleteIcon from "@/components/common/DeleteIcon";
import Section from "@/components/common/section";
import Button from "@/components/user/button";
import useUserFetchRequest from "@/components/user/hooks/request/useUserFetchRequest";
import useUserPostRequest from "@/components/user/hooks/request/useUserPostRequest";
import { ServerFetchRequestProps } from "@/types/request";
import React from "react";

const RequestView = ({
  requestList,
}: {
  requestList: Array<ServerFetchRequestProps>;
}) => {
  const { deleteRequest } = useUserPostRequest();

  if (!requestList || requestList.length === 0)
    return <p>문의 내용이 없습니다.</p>;
  return (
    <div className="my-5">
      <p className="font-bold text-lg">문의조회</p>
      {requestList.map((r, idx) => {
        return (
          // key => requestId 로 수정 필요
          <div key={`user_request_id_${idx}`} className="py-2">
            <AbsoluteIcon
              Icon={<DeleteIcon />}
              position="top-right"
              className="cursor-pointer"
              //   문의 조회 api 수정 후 수정 필요
              //   onClick={}
            />
            <p className="border-b">{r.title}</p>
            <p>{r.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const RequestCreate = () => {
  const { requestInfo, createRequest, handleRequestInfo } =
    useUserPostRequest();
  const { title, content } = requestInfo;
  return (
    <form
      className="my-2"
      onSubmit={async (e) => {
        e.preventDefault();
        createRequest();
      }}
    >
      <fieldset className="flex flex-col gap-5 my-2">
        <legend className="font-bold text-lg">문의 작성</legend>
        <div className="flex flex-col">
          <label htmlFor="">제목: </label>
          <input
            type="text"
            name="title"
            className="bg-gray-200 rounded-sm h-11"
            onChange={handleRequestInfo}
            value={title}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">문의내용: </label>
          <textarea
            name="content"
            className="bg-gray-200 rounded-sm h-48 resize-none"
            onChange={handleRequestInfo}
            value={content}
          ></textarea>
        </div>
      </fieldset>
      <Button
        color="primary"
        size="full"
        isRadius
        type="submit"
        disabled={!title || !content}
      >
        제출하기
      </Button>
    </form>
  );
};

const ClientComponent = () => {
  const { requestList, isLoading } = useUserFetchRequest();
  if (isLoading) return <p>...loading</p>;
  return (
    <>
      <Section>
        <RequestCreate />
      </Section>
      <Section>
        <RequestView requestList={requestList} />
      </Section>
    </>
  );
};

export default ClientComponent;
