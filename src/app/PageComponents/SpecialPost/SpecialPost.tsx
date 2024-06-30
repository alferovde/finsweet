import React from "react";
import style from "./specialpost.module.scss";
import Button from "@/app/StyleComponents/Button/Button";
const SpecialPost = () => {
  return (
    <section className={`${style.special_post__wrapper} container`}>
      <div className={style.special_post__post}>
        <span>Why we started </span>
        <h2>It started out as a simple idea and evolved into our passion</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Button>Discover our story {">"}</Button>
      </div>
    </section>
  );
};

export default SpecialPost;
