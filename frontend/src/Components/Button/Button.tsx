import React from "react";
import { ButtonCustom } from "./../../Types/Props";

export const Button: React.FC<ButtonCustom> = ({
  children,
  backgroud,
  textColor,
}) => {
  // 5. Agregar evento onNavigate
  // 6. Agregar evento onSubmit
  // 6.1 Estado success
  // 6.2 Estado error
  return (
    <div className="h-14">
      <button
        className={`${backgroud} ${textColor} font-bold text-base w-button-small h-full focus:outline-none focus:opacity-80 hover:opacity-80 active:opacity-70 rounded-full shadow-xl cursor-pointer`}
      >
        {children}
      </button>
    </div>
  );
};
