import React from "react";
import { SmallPostCardType } from "@/app/Store/interfaces";
import style from "./smallpostcard.module.scss";
import DateComponent from "../DateComponent/DateComponent";
const SmallPostCard = ({
  id,
  title,
  author_id,
  date,
  autors,
  onClick,
  currentPost,
}: SmallPostCardType) => {
  // const data_psot = new Date(date).toDateString();
  return (
    <div
      className={
        currentPost == id - 1
          ? style.small_card + " " + style.active
          : style.small_card
      }
      onClick={() => onClick(id - 1)}
    >
      <div className={style.small_card__header}>
        <p>
          By <span>{autors[0].name}</span> <DateComponent date={date} />
        </p>
      </div>
      <div className={style.small_card__title}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SmallPostCard;
