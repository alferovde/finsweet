import Image from "next/image";
import React from "react";
import style from "./categorycard.module.scss";
const path = process.env.storage_path;
type CategoryCardType = {
  id: number;
  title: string;
  img: string;
  fullcard?: boolean;
};

const CategoryCard = ({
  id,
  title,
  img,
  fullcard = false,
}: CategoryCardType) => {
  return (
    <div className={fullcard ? style.full_card : style.small_card}>
      <Image src={path + img} width={48} height={48} alt={title} />
      <h3>{title}</h3>
      {fullcard ? (
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      ) : undefined}
    </div>
  );
};

export default CategoryCard;
