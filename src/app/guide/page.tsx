"use client";

import Button from "@components/common/BaseButton";
import React from "react";
import "@root/globals.css";

const DesignGuidePage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <label>button</label>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <label>sm: 309px</label>
            <Button color="primary" isRadius size="sm">
              test1
            </Button>
          </div>
          <div className="flex flex-col">
            <label>lg: 340px</label>
            <Button color="primary" isRadius size="lg">
              test1
            </Button>
          </div>
          <div className="flex flex-col">
            <label>color: kakao</label>
            <Button color="kakao" isRadius size="sm">
              test1
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGuidePage;
