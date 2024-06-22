import React from "react";
import style from "./aboutus.module.scss";
import Link from "next/link";
const AboutUs = () => {
  return (
    <section className={`${style.aboutus__wrapper} container`}>
      <div className={style.aboutus__header}></div>
      <div className={style.aboutus__container}>
        <div className={style.aboutus__about}>
          <p>ABOUT US</p>
          <h2>
            We are a community of content writers who share their learnings
          </h2>
          <p className={style.aboutus_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href={"/about"}>Read More {">"}</Link>
        </div>
        <div className={style.aboutus__mission}>
          <p>Our mision</p>
          <h3>Creating valuable content for creatives all around the world</h3>
          <p className={style.aboutus_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
