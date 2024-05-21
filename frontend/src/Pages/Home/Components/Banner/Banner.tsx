import { svg } from "./../../../../assets";
import { Title, Text, Button } from "./../../../../Components";

const homeImg = svg.home;

export const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-28 md:flex-row mb-28 h-full md:mx-10 xl:mx-48">
      <div className="text-center md:text-left md:w-[345px] xl:w-[400px]">
        <div className="flex flex-col gap-6 mx-2 mb-5">
          <Title>A simple solution to complex tasks is coming soon</Title>
          <Text>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </Text>
        </div>
        <Button
          children="Get Started"
          backgroud="bg-brandeis-blue"
          textColor="text-white"
          to="/sign-up"
        />
      </div>
      <div className="h-full">
        <div className="absolute h-full top-[-325px] md:top-0 xl:top-[-300px] xl:right-[-300px]">
          {/* <img
            className="object-cover h-full w-full"
            src={homeImg["bg-pattern-header"]}
            alt="bg-pattern-header"
          /> */}
        </div>
        <div className="flex items-center justify-center top-1 w-full">
          <img
            className="absolute top-36 w-[171px] h-[192px] md:w-[281px] md:h-[314px] md:right-2 xl:w-[475px] xl:h-[531px] xl:right-40"
            src={homeImg["illustration-charts"]}
            alt="illustration-charts"
          />
        </div>
      </div>
    </div>
  );
};
