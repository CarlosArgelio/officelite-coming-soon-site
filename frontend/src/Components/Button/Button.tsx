import React from "react";
import { ButtonCustom } from "./../../Types/Props";

export const Button: React.FC<ButtonCustom> = ({
  children,
  backgroud,
  textColor,
}) => {
  // 2. Crear estado de focus
  // 3. Crear estado de hover
  // 4. Crear estado de Select
  // 5. Agregar evento onNavigate
  // 6. Agregar evento onSubmit
  // 6.1 Estado success
  // 6.2 Estado error
  return (
    <div className="h-14">
      <button
        className={`${backgroud} ${textColor} font-bold text-base w-button-small h-full rounded-full shadow-xl`}
      >
        {children}
      </button>
    </div>
  );
};
