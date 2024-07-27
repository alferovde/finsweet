import { PostType } from "@/app/Store/interfaces";
import Image from "next/image";
import React from "react";
import style from "./postitem.module.scss";
const path = process.env.storage_path;

const PostItem = ({ cat_title, title, img, description1 }: PostType) => {
  return (
    <div className={style.post_card}>
      <div className={style.post_card_img}>
        <Image
          src={path + img}
          //   fill={true}
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          height={318}
          width={490}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt={title}
        />
      </div>

      <div className={style.post_card_info}>
        <span>{cat_title}</span>
        <h2>{title}</h2>
        <p>{description1?.slice(0, 120)}...</p>
      </div>
    </div>
  );
};

export default PostItem;
