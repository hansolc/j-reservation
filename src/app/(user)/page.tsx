import React from "react";
import styles from "./page.module.css";
import Button from "@/components/user/Button";

const UserLoginPage = () => {
  return (
    <div className="">
      <header className="text-2xl font-extrabold">오마타세</header>
      <hr className={styles.force_ignore_padding} />
      <section>
        <div>서비스 이용이 처음이라면</div>
      </section>
      <section>
        <div>일본 음식점 예약 이제 줄 서지 마세요</div>
      </section>
      <section>
        첫 번째 예약
        <input type="text" />
        <input type="text" />
      </section>
      <section>
        <Button size="sm" color="primary">
          시작하기
        </Button>
      </section>
    </div>
  );
};

export default UserLoginPage;
