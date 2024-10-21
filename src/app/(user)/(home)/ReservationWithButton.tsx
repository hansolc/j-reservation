"use client";

import React, { useState } from "react";
import Button from "@/components/user/Button";

const ReservationFormWithButton = () => {
  const [formInfo, setFormInfo] = useState({
    link: "",
    adults: 0,
    kids: 0,
  });

  const handleButtonClick = () => {
    console.log("Form Info:", formInfo);
  };

  return (
    <>
      <form className="relative text-black pt-[45px] px-3 h-auto">
        <header className="text-xl">첫 번째 예약</header>
        <div className="border border-black rounded h-14 flex flex-col justify-center px-3">
          <p className="text-[10px]">구글 지도 음식점 링크</p>
          <input
            name="link"
            type="text"
            className="w-full text-sm"
            placeholder="https://map/google.com"
            onChange={(e) =>
              setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.value,
              })
            }
            value={formInfo.link}
          />
        </div>
        <div className="border border-black rounded h-14 flex flex-col justify-center px-3">
          <p className="text-[10px]">성인</p>
          <input
            name="adults"
            type="number"
            className="w-full text-sm"
            placeholder="0"
            onChange={(e) =>
              setFormInfo({
                ...formInfo,
                [e.target.name]: Number(e.target.value),
              })
            }
            value={formInfo.adults}
          />
        </div>
        <div className="border border-black rounded h-14 flex flex-col justify-center px-3">
          <p className="text-[10px]">어린이</p>
          <input
            name="kids"
            type="number"
            className="w-full text-sm"
            placeholder="0"
            onChange={(e) =>
              setFormInfo({
                ...formInfo,
                [e.target.name]: Number(e.target.value),
              })
            }
            value={formInfo.kids}
          />
        </div>
      </form>
      <section className="absolute top-[336px] w-full flex flex-col items-center gap-3">
        <Button size="sm" color="primary" onClick={handleButtonClick} isRadius>
          시작하기
        </Button>
        <Button size="sm" color="kakao" onClick={handleButtonClick} isRadius>
          카카오 로그인
        </Button>
      </section>
    </>
  );
};

export default ReservationFormWithButton;
