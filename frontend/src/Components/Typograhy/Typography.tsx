import { TypoGraphy } from "./../../Types/Props";

export const Text: React.FC<TypoGraphy> = ({ children }) => {
  return (
    <p className="font-light text-xl text-slate-gray text-center leading-7">
      {children}
    </p>
  );
};

export const Title: React.FC<TypoGraphy> = ({ children }) => {
  return (
    <h1 className="font-bold text-charcoal text-[40px] text-center leading-10">
      {children}
    </h1>
  );
};
