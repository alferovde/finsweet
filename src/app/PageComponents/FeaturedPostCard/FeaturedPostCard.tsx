import { FeaturedPostCardType, PostType } from "@/app/Store/interfaces";
import Image from "next/image";
import React from "react";
import style from "./featuredpostcard.module.scss";
import Button from "@/app/StyleComponents/Button/Button";
const FeaturedPostCard = ({
  title,
  img,
  date,
  autors,
  description1,
}: FeaturedPostCardType) => {
  const path = process.env.storage_path;
  const data_psot = new Date(date).toDateString();

  return (
    <div className={`${style.featured_post_card__wrapper}`}>
      <div className={style.featured_post_card__img}>
        <Image src={path + img} fill alt={title} />
      </div>

      <div className={style.featured_post_card__header}>
        <p>
          By <span>{autors[0].name}</span>
        </p>
        <p>{data_psot}</p>
      </div>
      <h3> {title}</h3>
      <div className={style.featured_post_card__description}>
        {description1.slice(0, 100) + " ..."}
      </div>
      <Button>Read more {">"} </Button>
    </div>
  );
};

export default FeaturedPostCard;
