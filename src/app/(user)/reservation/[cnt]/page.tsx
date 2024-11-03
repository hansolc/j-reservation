import Section from "@/components/common/section";
import Goback from "@/components/user/GoBack";
import ReservationForm from "@/components/user/reservation/ReservationForm";
import React from "react";

const ReservationAddPage = ({ params }: { params: { cnt: number } }) => {
  const { cnt } = params;
  return (
    <Section>
      <Section.Text>
        <Goback />
      </Section.Text>
      <ReservationForm controlable nth={cnt} />
      {/* <Link href="/reservation/success">
        <Button color="primary" size="full">
          예약요청
        </Button>
      </Link> */}
    </Section>
  );
};

export default ReservationAddPage;
