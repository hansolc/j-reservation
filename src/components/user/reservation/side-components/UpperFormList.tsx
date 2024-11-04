import Form from "@/components/common/form";
import React from "react";

const FormField = ({
  fieldInfoArray,
  handleChange,
}: {
  fieldInfoArray: Array<{
    label: string;
    placeholder: string;
    value: string | number;
    name: string;
    disabled: boolean;
  }>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const isMultiple = fieldInfoArray.length > 1;
  return (
    <Form.FieldContainer multiple={isMultiple}>
      {fieldInfoArray.map((fieldInfoObj, idx) => {
        return (
          <Form.Input
            key={`reservation_form_inputs_${fieldInfoObj.label}`}
            {...fieldInfoObj}
            onChange={handleChange}
            seperate={isMultiple && idx === 0}
          />
        );
      })}
    </Form.FieldContainer>
  );
};

const UpperFormList = ({
  fieldInfo,
  handleChange,
}: {
  fieldInfo: {
    link: string;
    adults: number;
    kids: number;
    isControllable: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <FormField
        fieldInfoArray={[
          {
            label: "구글 지도 음식점 링크 공유",
            placeholder: "https://maps.google.com",
            value: fieldInfo.link,
            name: "link",
            disabled: !fieldInfo.isControllable,
          },
        ]}
        handleChange={handleChange}
      />
      <FormField
        fieldInfoArray={[
          {
            label: "성인",
            placeholder: "0",
            value: fieldInfo.adults,
            name: "adults",
            disabled: !fieldInfo.isControllable,
          },
          {
            label: "어린이",
            placeholder: "0",
            value: fieldInfo.kids,
            name: "kids",
            disabled: !fieldInfo.isControllable,
          },
        ]}
        handleChange={handleChange}
      />
    </>
  );
};

export default UpperFormList;
