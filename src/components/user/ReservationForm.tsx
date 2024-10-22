"use client";

import React from "react";

const ReservationFrom = () => {
  //   const { link, adults, kids } = formInfo;

  return (
    <form className="relative text-black pt-[45px] px-3 h-auto">
      <header className="text-xl">첫 번째 예약</header>
      <div className="border border-black rounded h-14 flex flex-col justify-center px-3">
        <p className="text-[10px]">구글 지도 음식점 링크</p>
        <input
          name="link"
          type="text"
          className="w-full text-sm"
          placeholder="https://map/google.com"
        />
      </div>
      <div className="border border-black rounded h-14 flex flex-col justify-center px-3">
        <p className="text-[10px]">성인</p>
        <input
          name="adults"
          type="number"
          className="w-full text-sm"
          placeholder="0"
        />
      </div>
      <div className="border border-black rounded h-14 flex flex-col justify-center px-3">
        <p className="text-[10px]">어린이</p>
        <input
          name="kids"
          type="number"
          className="w-full text-sm"
          placeholder="0"
        />
      </div>
    </form>
  );
};

export default ReservationFrom;
