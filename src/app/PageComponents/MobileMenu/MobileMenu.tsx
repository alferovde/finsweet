import React, { useState } from "react";
import style from "./mobile_menu.module.scss";
import Navigation from "../Navigation/Navigation";
interface IMobileMenu {
  setAciveMenu: any;
}

const MobileMenu = ({ setAciveMenu }: IMobileMenu) => {
  const [animate, setAnimate] = useState("animate__fadeInRightBig");

  const handlerCloseMenu = () => {
    setAnimate("animate__fadeOutRightBig");

    setTimeout(() => {
      setAciveMenu(false);
    }, 500);
  };

  return (
    <div className={`${style.mobile_menu} animate__animated ${animate}`}>
      <button
        onClick={() => handlerCloseMenu()}
        className={style.close_menu}
      ></button>

      <Navigation />
    </div>
  );
};

export default MobileMenu;
