import { Banner } from "./Components";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 h-[100vh]">
        <div className="absolute top-[-125px] grid place-content-center">
          <Banner />
        </div>
        {/* <div className="card">Pricing - Plan Basic</div>
        <div className="card">Pricing - Plan Pro</div>
        <div className="card">Pricing - Plan Ultimate</div>
        <div className="card">Footer</div> */}
      </div>
    </>
  );
};
