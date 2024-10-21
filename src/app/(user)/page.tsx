import React from "react";
import styles from "./page.module.css";
import ReservationForm from "@/components/user/ReservationForm";
import LoginButtons from "./(home)/LoginButtons";

const UserLoginPage = () => {
  return (
    <div className="h-container">
      <header className="text-2xl font-extrabold">오마타세</header>
      <hr className={styles.force_ignore_padding} />
      <section>
        <div className="border border-primary h-[50px] flex justify-between items-center px-8 rounded-lg text-primary text-[15px]">
          <span className="font-bold">서비스 이용이 처음이라면!</span>
          <div className="flex">
            가이드 보기{" "}
            <span className="material-symbols-outlined">&#xe315;</span>
          </div>
        </div>
      </section>
      <section className="h-[470px]">
        <div className="relative rounded-lg h-[258px] bg-home-img bg-cover bg-top text-[32px] font-bold text-white pt-8 px-[18px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#71ADD399] to-#000000"></div>
          <div className="relative leading-10">
            일본 음식점 예약<br></br>이제 줄 서지 마세요
          </div>

          {/* 첫 번재 예약 */}
          <div className={styles.home_absolute_container}>
            <ReservationForm />
          </div>
        </div>
      </section>
      <section>
        <LoginButtons />
      </section>
    </div>
  );
};

export default UserLoginPage;
