import type { ReactNode } from "react";

export interface IContent {
  text: string;
  image?: string;
}

export interface ICaffeData {
  id: string;
  bgImageSrc: string;
  headerText: string;
  redBoxTopText: string;
  redBoxBottomText: string;
  content: ReactNode;
}