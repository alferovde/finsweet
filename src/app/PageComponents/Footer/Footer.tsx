import React from "react";
import style from "./footer.module.scss";
import Image from "next/image";
import logo from "../../../../public/images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import Button from "@/app/StyleComponents/Button/Button";
import { Inter } from "next/font/google";
import SocialList from "../SocialList/SocialList";
import NavigationFooter from "./NavigationFooter";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.footer__wrapper} container`}>
        <div className={style.footer__top}>
          <Image src={logo} alt="logo" />
          <NavigationFooter />
        </div>
        <div className={style.footer__middle}>
          <h2>Subscribe to our news letter to get latest updates and news</h2>
          <form action="" className={style.subscribe_form}>
            <input
              className={inter.className}
              type="text"
              placeholder="Enter Your Email"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
        <div className={style.footer__bottom}>
          <div className={style.footer__bottom__left}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <SocialList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
