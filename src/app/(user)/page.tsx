import React from "react";
import styles from "./page.module.css";
import LoginButtons from "./(home)/LoginButtons";
import FirstUserBanner from "@/components/user/FirstUserBanner";
import HomeHeader from "@/components/user/HomeHeader";
import ReservationManager from "@/components/user/reservation/ReservationManager";

// interface UserInfoProps {
//   reservationCnt?: number;
// }

// const getUserInfo = async (): Promise<UserInfoProps> => {
//   // get userinfo api

//   return {
//     reservationCnt: 1
//   }
// }

const UserLoginPage = async () => {
  // const userInfo = await getUserInfo();

  return (
    <div className="h-container">
      <HomeHeader isLoggedIn={true}>오마타세</HomeHeader>
      <hr className={`border-[#DDDDDD] ${styles.force_ignore_padding}`} />
      <section>
        <FirstUserBanner />
      </section>
      <section className="z-30">
        <div className="relative rounded-lg h-[258px] bg-home-img bg-cover bg-top text-[32px] font-bold text-white pt-8 px-[18px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#71ADD399] to-#000000"></div>
          <div className="relative leading-10">
            일본 음식점 예약<br></br>이제 줄 서지 마세요
          </div>
        </div>
      </section>
      <section className="mt-[-100px] z-40 relative px-1">
        <ReservationManager isLoggedIn />
      </section>
      <section>
        <LoginButtons />
      </section>
    </div>
  );
};

export default UserLoginPage;
