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
