import { svg } from "./../../../../assets";
import { Title, Text } from "./../../../../Components";

const homeImg = svg.home;

export const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-28 md:flex-row md:mx-10 mb-28 h-full">
      <div className="text-center md:text-left md:w-[345px]">
        <div className="flex flex-col gap-6 mx-2 mb-5">
          <Title>A simple solution to complex tasks is coming soon</Title>
          <Text>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </Text>
        </div>
        <div className="grid place-content-center md:place-content-start">
          <button className="w-[100px] h-[48px] border border-y-blue-800 rounded-lg">
            Get Starred
          </button>
        </div>
      </div>
      <div className="h-full">
        <div className="absolute h-full top-[-325px] md:top-0">
          <img
            className="object-cover h-full w-full"
            src={homeImg["bg-pattern-header"]}
            alt="bg-pattern-header"
          />
        </div>
        <div className="flex items-center justify-center top-1 w-full">
          <img
            className="absolute top-36 w-[171px] h-[192px] md:w-[281px] md:h-[314px]"
            src={homeImg["illustration-charts"]}
            alt="illustration-charts"
          />
        </div>
      </div>
    </div>
  );
};
