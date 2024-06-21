import React from "react";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../../../public/images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "@/app/StyleComponents/Button/Button";
import Link from "next/link";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.header__container} container`}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        <Navigation />
        <Button>Subscribe</Button>
        <div className={style.header__mobile_menu}>O</div>
      </div>
    </header>
  );
};

export default Header;
