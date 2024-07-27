import { PostType } from "@/app/Store/interfaces";
import React from "react";
import style from "./blog_featurepost.module.scss";
import Image from "next/image";
import DateComponent from "../DateComponent/DateComponent";
import Button from "@/app/StyleComponents/Button/Button";
const path = process.env.storage_path;
const BlogFeaturePost = ({
  data,
  authors,
}: {
  data: PostType;
  authors: string;
}) => {
  return (
    <section className={style.feature_post}>
      <div className={`${style.feature_post__wrapper} container`}>
        <div
          className={style.feature_post_data}
          style={{
            backgroundImage: `linear-gradient(#0000007a, #0000007a), url(${
              path + data.img
            }`,
          }}
        >
          <p className={style.feature_post_span}>Featured Post</p>
          <h2>{data.title}</h2>
          <div className={style.feature_author}>
            <p className={style.feature_author_name}>
              By <span>{authors} </span>
            </p>
            <div className={style.feature_author_divider}></div>
            <p className={style.feature_author_date}>
              <DateComponent date={data.date} />
            </p>
          </div>
          <p className={style.feature_description}>
            {data.description1.slice(0, 150) + "..."}
          </p>

          <Button>Read more {">"} </Button>
        </div>
        <div className={style.feature_post_img}>
          <Image
            src={path + data.img}
            width={515}
            height={359}
            alt={data.title}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogFeaturePost;
