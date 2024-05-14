import { Commig } from "./../../Pages/Home/Components";
import { svg } from "./../../assets";

const home = svg.home;

export const Footer = () => {
  return (
    <footer className="absolute -z-10 top-[1600px] h-[1248px] w-full bg-prussian-blue text-white">
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

            <div>
              <Commig />
            </div>

            <div>
              <button className="w-[100px] h-[48px] bg-brandeis-blue border border-y-blue-800 rounded-lg">
                Get Starred
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};