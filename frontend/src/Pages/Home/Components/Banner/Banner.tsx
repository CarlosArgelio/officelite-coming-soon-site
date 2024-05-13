import { svg } from "./../../../../assets";
import { Title, Text } from "./../../../../Components";

const homeImg = svg.home;

export const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-24">
      <div className="flex flex-col gap-6 mx-2">
        <Title>A simple solution to complex tasks is coming soon</Title>
        <Text>
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </Text>
      </div>
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
    </div>
  );
};
