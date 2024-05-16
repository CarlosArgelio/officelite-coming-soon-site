import { Field } from "formik";
import React from "react";
import { InputProp } from "../../../../Types/Props";

export const Input: React.FC<InputProp> = ({
  type,
  name,
  placeholder,
  error,
}) => {
  const styleError =
    "invalid:border-sunset-orange invalid:text-sunset-orange focus:invalid:border-sunset-orange focus:invalid:ring-sunset-orange";

  return (
    <div className="flex flex-col justify-between gap-2 mb-6 w-full h-11">
      <Field
        type={type}
        name={name}
        className={`text-slate-gray w-full h-full pb-2 border-b focus:outline-none
        ${error ? styleError : ""}
        `}
        placeholder={placeholder}
      />
    </div>
  );
};
