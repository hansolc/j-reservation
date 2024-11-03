"use client";

import React, { useEffect, useState } from "react";
import cls from "classnames";

const GlobalToast = ({
  msg,
  duration = 2000,
}: {
  msg: string | null;
  duration?: number;
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      const timeId = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timeId);
    }
  }, [msg, duration]);

  if (!visible) return null;
  return (
    <div
      className={cls(
        "fixed top-0 left-1/2 -translate-x-1/2 bg-red-500 text-white p-4 rounded transition-opacity",
        visible ? "animate-fadein" : "animate-fadeout"
      )}
    >
      {msg}
    </div>
  );
};

export default GlobalToast;
