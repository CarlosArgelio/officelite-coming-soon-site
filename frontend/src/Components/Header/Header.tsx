import { svg } from "./../../assets";

const { logo } = svg;

export const Header = () => {
  return (
    <div className="grid place-content-center p-12 md:place-content-start">
      <img src={logo} alt="Logo Offcelite" />
    </div>
  );
};
