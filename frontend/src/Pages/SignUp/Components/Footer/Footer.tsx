import React from "react";
import { Commig, Button } from "./../../../../Components";
import { svg } from "./../../../../assets";
import { FooterProp } from "../../../../Types/Props";

const home = svg.home;

export const Footer: React.FC<FooterProp> = ({ viewComming, heigth }) => {
  return (
    <footer
      className={`absolute -z-10 top-[850px] h-[${heigth}px] w-full bg-prussian-blue text-white`}
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
            <div className="absolute w-full top-[948px] text-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <p className="uppercase font-bold tracking-widest">
                  coming <span className="text-brandeis-blue">4 nov 2020</span>
                </p>

                <div>
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
