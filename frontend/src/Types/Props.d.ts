export interface TypoGraphy {
  children: string;
}

export type BackgroudCardPrice = "bg-white" | "bg-brandeis-blue";
export interface CardPrice {
  title: string;
  backgroud: BackgroudCardPrice;
  offert: string;
  expecificationOffert: string;
  details: string[];
}
export type CardHead = Pick<CardPrice, "title">;
export type CardOffert = Pick<CardPrice, "offert" | "expecificationOffert">;
export type CardDetail = Pick<CardPrice, "details" | "backgroud">;

export interface Comming {
  titleDate: string;
  number: number;
}

export type childrenButtonNaming =
  | "Get Started"
  | "Try for Free"
  | "Get on the list";
export type backgroudButtonNaming =
  | "bg-cornflower-blue"
  | "bg-white"
  | "bg-brandeis-blue";
export type textColorButtonNaming = "text-white" | "text-brandeis-blue";
export type LinkToString = "/sign-up";

export interface ButtonCustom {
  children: childrenButtonNaming;
  backgroud: backgroudButtonNaming;
  textColor: textColorButtonNaming;
  to: LinkToString;
}
