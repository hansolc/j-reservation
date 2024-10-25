import React from "react";

const FirstUserBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} border border-primary h-[50px] flex justify-between items-center px-8 rounded-lg text-primary text-[15px]`}
    >
      <span className="font-bold">서비스 이용이 처음이라면!</span>
      <div className="flex">
        가이드 보기 <span className="material-symbols-outlined">&#xe315;</span>
      </div>
    </div>
  );
};

export default FirstUserBanner;
