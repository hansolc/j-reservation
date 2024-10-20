import React from "react";
import styles from "./page.module.css";
import Button from "@/components/user/button";

const UserLoginPage = () => {
  return (
    <div className="">
      <p className="text-xl font-extrabold divide-y-2">오마타세</p>
      <hr className={styles.force_ignore_padding} />
      <Button color="primary">시작하기</Button>
    </div>
  );
};

export default UserLoginPage;
