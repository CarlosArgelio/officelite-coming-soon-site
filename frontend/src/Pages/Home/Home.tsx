import { Banner, CardPriceContainer } from "./Components";
import { Footer } from "./../../Components";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 h-[100vh]">
        <div className="grid place-content-center md:place-content-start mb-4 xl:mb-20">
          <Banner />
        </div>
        <div className="container">
          <div className="relative mx-10">
            <CardPriceContainer />
          </div>
        </div>
        <Footer viewComming={true} />
      </div>
    </>
  );
};
