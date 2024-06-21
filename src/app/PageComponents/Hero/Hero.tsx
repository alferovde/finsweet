import React from "react";
import style from "./hero.module.scss";
import { PostType } from "@/app/Store/interfaces";
import Button from "@/app/StyleComponents/Button/Button";

type HeroComponent = {
  data: PostType;
  categories: string;
  autor: string;
};

const Hero = ({ data, categories, autor }: HeroComponent) => {
  const data_psot = new Date(data.date).toDateString();

  return (
    <section className={style.hero__wrapper}>
      <div className="container">
        <div className={style.hero__title}>
          <p>
            postder on <b>{categories}</b>
          </p>
          <h1>{data.title}</h1>
        </div>

        <div className={style.hero__author}>
          <p className={style.hero__author_name}>
            By <span>{autor}</span>
          </p>
          <p className={style.hero__author_date}>{data_psot}</p>
        </div>
        <div className={style.hero__description}>
          {data.description1.slice(0, 220) + " ..."}
        </div>
        <Button>Read more {">"} </Button>
      </div>
    </section>
  );
};

export default Hero;
