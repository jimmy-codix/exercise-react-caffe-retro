import type { ReactNode } from "react";
import { RedBox } from "./RedBox";

interface IPage {
  id : string
  redBoxTopText: string;
  redBoxBottomText: string;
  headerText: string;
  children: ReactNode;
}

export const Page = ({ id, redBoxTopText, redBoxBottomText, headerText, children }: IPage) => {
  return (
    <section className="section" id={id}>
        <h2>{headerText}</h2>
        <RedBox className="box red top" text={redBoxTopText} />
        <RedBox className="box red bottom" text={redBoxBottomText} />
        <div className="content">{children}</div>
    </section>
  )
};
