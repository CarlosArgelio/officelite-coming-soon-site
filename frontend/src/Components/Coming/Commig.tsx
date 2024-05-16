import React from "react";
import { Comming, CommingProp } from "../../Types/Props";

export const Commig: React.FC<CommingProp> = ({
  backgroud,
  numberColor,
  textColor,
}) => {
  return (
    <div className="grid place-content-center grid-cols-4 gap-2 w-full">
      <Box
        titleDate="day"
        number={13}
        backgroud={backgroud}
        numberColor={numberColor}
        textColor={textColor}
      />
      <Box
        titleDate="hours"
        number={13}
        backgroud={backgroud}
        numberColor={numberColor}
        textColor={textColor}
      />
      <Box
        titleDate="min"
        number={13}
        backgroud={backgroud}
        numberColor={numberColor}
        textColor={textColor}
      />
      <Box
        titleDate="sec"
        number={13}
        backgroud={backgroud}
        numberColor={numberColor}
        textColor={textColor}
      />
    </div>
  );
};

export const Box: React.FC<Comming> = ({
  titleDate,
  number,
  backgroud,
  numberColor,
  textColor,
}) => {
  return (
    <div
      className={`flex flex-col items-center ${backgroud} font-bold w-[72px] h-[92px] rounded-lg`}
    >
      <div className={`${numberColor} text-3xl pt-3`}>{number}</div>
      <div className={`${textColor} opacity-40 pt-3`}>{titleDate}</div>
    </div>
  );
};
