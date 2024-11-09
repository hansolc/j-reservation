import { ServerAdminFetchRequestProps } from "@/types/request";
import useFetchRequest from "../hooks/useFetchRequest";
import usePostRequest from "../hooks/usePostRequest";
import { isostringToDateTime } from "@/utils/reservation";
import AbsoluteIcon from "@/components/common/AbsoluteIcon";
import CheckIcon from "@/components/user/CheckIcon";

const RequestItem = ({
  children,
  requestInfo,
}: {
  children: React.ReactNode;
  requestInfo: ServerAdminFetchRequestProps;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p>{`문의번호: ${requestInfo.id}`}</p>
        <p>{isostringToDateTime(requestInfo.createdAt)}</p>
      </div>
      <p>{`제목: ${requestInfo.title}`}</p>
      <div className="h-20 bg-gray-300 rounded px-2 py-2 overflow-auto">
        {requestInfo.content}
      </div>
      {children}
    </div>
  );
};

const ResponseTextArea = ({
  requestId,
  responseList,
}: {
  requestId: number;
  responseList: { [key: number]: string };
}) => {
  const { handleResponse, responseContent, responseRequest } = usePostRequest({
    responseList,
  });
  return (
    <>
      <AbsoluteIcon
        Icon={<CheckIcon />}
        customClassName="top-[10px] right-0"
        className="cursor-pointer"
        onClick={() => responseRequest({ requestId })}
      />
      <textarea
        name={`request_comment_${requestId}`}
        id={`request_comment_${requestId}`}
        className="resize-none bg-gray-200 rounded p-2 mt-4"
        rows={3}
        placeholder="문의에 대한 답변 작성 후 오른쪽 상단 체크 버튼을 눌러주세요."
        value={responseContent[requestId] || ""}
        onChange={(e) => handleResponse(e, requestId)}
      ></textarea>
    </>
  );
};

const RequestList = () => {
  const { requestList, isLoading, responseList } = useFetchRequest();

  if (isLoading) return <p>...loading</p>;
  if (!requestList.length) return <p>문의 내용이 없습니다.</p>;
  return (
    <>
      {requestList.map((r) => {
        return (
          <RequestItem requestInfo={r} key={`admin_request_item_${r.id}`}>
            <ResponseTextArea requestId={r.id} responseList={responseList} />
          </RequestItem>
        );
      })}
    </>
  );
};

export default RequestList;
