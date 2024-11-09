import Section from "@/components/common/section";
import Button from "@/components/user/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReservationSuccess = () => {
  return (
    <Section className="flex flex-col items-center justify-center h-full mt-[-5rem]">
      <div className="w-[254px] h-254px">
        <Image
          src={"/assets/images/reservation_success_blue.png"}
          alt="Success icon"
          width={254}
          height={254}
        />
      </div>
      <Section.Text bold fontSize={25} className="text-center">
        예약 확인 완료되었어요
      </Section.Text>
      <Section.Text outlined fontSize={17} className="text-center">
        해당 음식점에 예약 확인 후 예약 안내를
        <br />
        한번 더 보내드릴게요
      </Section.Text>
      {/* !!!! */}
      <Link
        href="/reservation/check"
        className="fixed max-w-[340px] bottom-8 w-full"
      >
        <Button color="primary" size="lg" isRadius>
          확인
        </Button>
      </Link>
    </Section>
  );
};

export default ReservationSuccess;
