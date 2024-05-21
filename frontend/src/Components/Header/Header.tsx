import { svg } from "./../../assets";

const { logo } = svg;

export const Header = () => {
  return (
    <header className="grid place-content-center p-12 md:place-content-start lg:ml-40">
      <img src={logo} alt="Logo Offcelite" />
    </header>
  );
};
