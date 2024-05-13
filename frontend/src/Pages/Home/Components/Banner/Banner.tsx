import { svg } from "./../../../../assets";

const homeImg = svg.home;

export const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src={homeImg["bg-pattern-header"]} alt="bg-pattern-header" />
      </div>
      <div className="flex items-center justify-center top-1 w-full">
        <img
          className="absolute top-60 w-[171px] h-[192px]"
          src={homeImg["illustration-charts"]}
          alt="illustration-charts"
        />
      </div>
    </div>
  );
};
