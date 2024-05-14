import { Commig } from "./../../Components";
import { svg } from "./../../../../assets";

const home = svg.home;

export const Footer = () => {
  return (
    <div className="h-full">
      <div className="h-full border border-red-600">
        <img
          className="object-cover h-full"
          src={home["bg-pattern-footer"]}
          alt="bg-pattern-footer"
        />
      </div>
      <div className="absolute w-full top-[948px] text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="uppercase font-bold tracking-widest">
            coming <span className="text-brandeis-blue">4 nov 2020</span>
          </p>

          <Commig />

          <div>
            <button className="w-[100px] h-[48px] bg-brandeis-blue border border-y-blue-800 rounded-lg">
              Get Starred
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
