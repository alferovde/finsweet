"use client";

import React, { useState } from "react";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../../../public/images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "@/app/StyleComponents/Button/Button";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
const Header = () => {
  const [activeMenu, setAciveMenu] = useState(false);

  const handlerOpenMobileMenu = () => {
    setAciveMenu(true);
  };

  return (
    <header className={style.header}>
      <div className={`${style.header__container} container`}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        <Navigation />
        <Button>Subscribe</Button>
        <div
          className={style.header__mobile_menu}
          onClick={() => handlerOpenMobileMenu()}
        ></div>
        {activeMenu ? <MobileMenu setAciveMenu={setAciveMenu} /> : null}
      </div>
    </header>
  );
};

export default Header;
