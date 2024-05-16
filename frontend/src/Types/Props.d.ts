import React from "react";

export interface Button {
  type?: "submit" | "reset" | "button" | undefined;
}

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
  children: React.ReactNode;
}
export type CardHead = Pick<CardPrice, "title">;
export type CardOffert = Pick<CardPrice, "offert" | "expecificationOffert">;
export type CardDetail = Pick<CardPrice, "details" | "backgroud">;

export interface Comming {
  titleDate: string;
  number: number;
  backgroud: BackgroudCommingProp;
  numberColor: NumberColor;
  textColor: TextColor;
}
export type BackgroudCommingProp = "bg-charcoal" | "bg-royal-blue-opacity";
export type NumberColor = "text-white" | "text-brandeis-blue";
export type TextColor = "text-white" | "text-charcoal opacity-80";
export type CommingProp = Pick<
  Comming,
  "backgroud" | "numberColor" | "textColor"
>;

export type childrenButtonNaming =
  | "Get Started"
  | "Try for Free"
  | "Get on the list"
  | "Get on the list";
export type backgroudButtonNaming =
  | "bg-royal-blue-opacity"
  | "bg-white"
  | "bg-brandeis-blue";
export type textColorButtonNaming = "text-white" | "text-brandeis-blue";
export type LinkToString = "/sign-up";

export interface ButtonCustom {
  type?: Button["type"];
  children: childrenButtonNaming;
  backgroud: backgroudButtonNaming;
  textColor: textColorButtonNaming;
  to: LinkToString;
}

export interface FooterProp {
  viewComming: boolean;
  heigth: number;
}

export interface BannerProp {
  viewButton: boolean;
}

export interface InputProp {
  type: string;
  name: string;
  placeholder: string;
  error: string | boolean | undefined;
}
