import React from "react";
import { Comming } from "./../../../../Types/Props";

export const Commig = () => {
  return (
    <div className="grid grid-cols-4 gap-2 w-full">
      <Box titleDate="day" number={13} />
      <Box titleDate="hours" number={13} />
      <Box titleDate="min" number={13} />
      <Box titleDate="sec" number={13} />
    </div>
  );
};

export const Box: React.FC<Comming> = ({ titleDate, number }) => {
  return (
    <div className="bg-charcoal font-bold w-[72px] h-[92px] rounded-lg">
      <div className="text-white text-3xl pt-3">{number}</div>
      <div className="text-white opacity-40 pt-3">{titleDate}</div>
    </div>
  );
};
