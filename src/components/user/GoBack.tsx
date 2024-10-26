"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Goback = () => {
  const router = useRouter();
  return (
    <span
      className="material-symbols-outlined cursor-pointer"
      onClick={() => router.back()}
    >
      &#xe314;
    </span>
  );
};

export default Goback;
