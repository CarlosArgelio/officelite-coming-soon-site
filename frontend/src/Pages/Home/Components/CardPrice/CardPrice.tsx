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
      className={`${backgroud} ${styles[backgroud].primary} md:relative flex flex-col text-center md:text-left p-4 w-full h-[500px] rounded-2xl drop-shadow-lg md:h-80`}
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
  return (
    <div className="font-bold text-xl leading-7 mt-8 mb-14 md:mt-0 md:mb-5 md:p-4">
      {title}
    </div>
  );
};

const Offert: React.FC<CardOffert> = ({ offert, expecificationOffert }) => {
  return (
    <div className="mb-14 md:mb-5">
      <div className="font-bold text-6xl leading-7 mb-7">{offert}</div>
      <p className="font-medium">{expecificationOffert}</p>
    </div>
  );
};

const Detail: React.FC<CardDetail> = ({ details, backgroud }) => {
  return (
    <div className="md:absolute md:right-6 md:top-28">
      <ul className="mb-6 md:mb-2 md:text-right">
        {details.map((detail, index) => (
          <li
            key={index}
            className={`font-light ${styles[backgroud].primary} mb-4 md:mb-1`}
          >
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};
