import { Banner, CardPriceContainer } from "./Components";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 h-[100vh]">
        <div className="grid place-content-center md:place-content-start">
          <Banner />
        </div>
        <div className="grid mx-10">
          <CardPriceContainer />
        </div>
        {/* <div className="card">Pricing - Plan Basic</div>
        <div className="card">Pricing - Plan Pro</div>
        <div className="card">Pricing - Plan Ultimate</div>
        <div className="card">Footer</div> */}
      </div>
    </>
  );
};
