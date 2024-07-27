"use client";

import React, { useState } from "react";
import style from "./featured_post.module.scss";
import { PostType, AutorsType } from "@/app/Store/interfaces";
import SmallPostCard from "../SmallPostCard/SmallPostCard";
import Link from "next/link";
import FeaturedPostCard from "../FeaturedPostCard/FeaturedPostCard";

type FeaturedPost = {
  data: PostType[];

  autors: AutorsType[];
};

const FeaturedPost = ({ data, autors }: FeaturedPost) => {
  const [currentPost, setCurrentPost] = useState(1);

  const renderAllPosts = () => {
    return data.map((item) => {
      return (
        <SmallPostCard
          key={item.id}
          {...item}
          autors={autors.filter(
            (user: AutorsType) => item.author_id === user.id
          )}
          onClick={setCurrentPost}
          currentPost={currentPost}
        />
      );
    });
  };

  const renderFetredPost = () => {
    return (
      <FeaturedPostCard
        {...data[currentPost]}
        autors={autors.filter(
          (user: AutorsType) => data[currentPost].author_id === user.id
        )}
      />
    );
  };

  return (
    <section className={`${style.featured_post__wrapper} container`}>
      <div className={style.featured_post__post}>
        <h2>Featured Post</h2>

        {renderFetredPost()}
      </div>
      <div className={style.featured_post__allpost}>
        <div className={style.featured_post__allpost__header}>
          <h2>All Posts</h2>
          <Link href={"/blog"}>View All</Link>
        </div>
        <div className={style.featured_post__allpost__render}>
          {renderAllPosts()}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
