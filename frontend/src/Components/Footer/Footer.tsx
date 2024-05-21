import React from "react";
import { Commig } from "./../../Components";
import { Button } from "./../../Components";
import { svg } from "./../../assets";
import { FooterProp } from "../../Types/Props";

const home = svg.home;

export const Footer: React.FC<FooterProp> = ({ viewComming }) => {
  return (
    <footer
      className={`absolute -z-10 top-[1600px] md:top-[1200px] h-[1248px] md:h-[1148px] xl:h-[800px] xl:top-[1000px] w-full bg-prussian-blue text-white`}
    >
      <div className="h-full">
        <div className="h-full border border-red-600">
          <img
            className="object-cover h-full"
            src={home["bg-pattern-footer"]}
            alt="bg-pattern-footer"
          />
        </div>
        {viewComming && (
          <>
            <div className="absolute w-full top-[848px] text-center xl:top-[400px]">
              <div className="flex flex-col items-center justify-center gap-6 xl:flex xl:flex-row xl:gap-80">
                <div className="xl:flex xl:flex-col xl:gap-4 xl:justify-start">
                  <p className="uppercase font-bold tracking-widest xl:text-left">
                    coming{" "}
                    <span className="text-brandeis-blue">4 nov 2020</span>
                  </p>
                  <Commig
                    backgroud="bg-charcoal"
                    numberColor="text-white"
                    textColor="text-white"
                  />
                </div>
                <Button
                  backgroud="bg-brandeis-blue"
                  children="Get Started"
                  textColor="text-white"
                  to="/sign-up"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};
