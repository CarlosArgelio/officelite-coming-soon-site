import {
  CardPrice,
  CardHead,
  CardOffert,
  CardDetail,
} from "./../../../../Types/Props";
import { svg } from "./../../../../assets";

const home = svg.home;

const styles = {
  "bg-white": {
    primary: "text-charcoal",
    secondary: "text-slate-gray",
  },
  "bg-brandeis-blue": {
    primary: "text-white",
    secondary: "text-white",
  },
};

export const Card: React.FC<CardPrice> = ({
  title,
  backgroud,
  details,
  offert,
  expecificationOffert,
  children,
}) => {
  const isBrandeisBlue = backgroud === "bg-brandeis-blue";

  return (
    <div
      className={`${backgroud} ${styles[backgroud].primary} flex flex-col text-center p-4 w-full h-[500px] rounded-2xl drop-shadow-lg`}
    >
      {isBrandeisBlue && (
        <img
          className="absolute left-0 top-[-40px]"
          src={home["bg-pattern-pricing"]}
          alt="bg-pattern-pricing"
        />
      )}
      <CardHeader title={title} />
      <Offert offert={offert} expecificationOffert={expecificationOffert} />
      <Detail details={details} backgroud={backgroud} />
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHead> = ({ title }) => {
  return <div className="font-bold text-xl leading-7 mt-8 mb-14">{title}</div>;
};

const Offert: React.FC<CardOffert> = ({ offert, expecificationOffert }) => {
  return (
    <div className="mb-14">
      <div className="font-bold text-6xl leading-7 mb-7">{offert}</div>
      <p className="font-medium">{expecificationOffert}</p>
    </div>
  );
};

const Detail: React.FC<CardDetail> = ({ details, backgroud }) => {
  return (
    <ul className="mb-6">
      {details.map((detail, index) => (
        <li
          key={index}
          className={`font-light ${styles[backgroud].primary} mb-4`}
        >
          {detail}
        </li>
      ))}
    </ul>
  );
};
