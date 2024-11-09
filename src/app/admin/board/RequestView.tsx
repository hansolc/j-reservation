"use client";

import RequestList from "@/components/admin/request";
import Section from "@/components/common/section";
import React, { useState } from "react";

const RequestView = () => {
  return (
    <Section className="flex flex-col gap-10">
      <RequestList />
    </Section>
  );
};

export default RequestView;
