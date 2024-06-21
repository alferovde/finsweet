import React from "react";
import "./button.scss";
import { Sen } from "next/font/google";
type ButtonType = {
  children: string[] | string;
};
const sen = Sen({ subsets: ["latin"] });
const Button = ({ children }: ButtonType) => {
  return (
    <button className={`${sen.className} button_style`}>{children}</button>
  );
};

export default Button;
