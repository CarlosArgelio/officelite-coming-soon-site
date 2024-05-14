import { Banner, CardPriceContainer } from "./Components";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 h-[100vh]">
        <div className="grid place-content-center md:place-content-start">
          <Banner />
        </div>
        <div className="container h-full">
          <div className="relative mx-10">
            <CardPriceContainer />
          </div>
          {/* <div className="absolute -z-10 top-[1600px] h-[1248px] w-full bg-prussian-blue text-white">
            <Footer />
          </div> */}
        </div>
      </div>
    </>
  );
};
