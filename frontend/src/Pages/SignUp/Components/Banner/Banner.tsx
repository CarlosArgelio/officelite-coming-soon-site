import React from "react";
import { svg } from "./../../../../assets";
import { Title, Text, Button } from "./../../../../Components";
import { BannerProp } from "../../../../Types/Props";

const homeImg = svg.home;

export const Banner: React.FC<BannerProp> = ({ viewButton }) => {
  return (
    <div className="relative flex flex-col-reverse gap-28 md:flex-row md:mx-10 mb-28 h-[280px]">
      <div className="absolute text-center top-10">
        <div className="flex flex-col gap-6 mx-2 mb-5">
          <Title>Work smarter. Save time.</Title>
          <Text>
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </Text>
        </div>
        {viewButton && (
          <Button
            children="Get Started"
            backgroud="bg-brandeis-blue"
            textColor="text-white"
            to="/sign-up"
          />
        )}
      </div>
      <div className="h-full">
        <div className="absolute h-full top-[-325px] md:top-0">
          <img
            className="object-cover h-full w-full"
            src={homeImg["bg-pattern-header"]}
            alt="bg-pattern-header"
          />
        </div>
      </div>
    </div>
  );
};
