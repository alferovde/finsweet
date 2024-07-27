"use client";

import React, { useEffect, useState } from "react";
import style from "./allposts.module.scss";
import { CategoriesType, PostType } from "@/app/Store/interfaces";
import PostItem from "../PostItem/PostItem";

async function getAllPost(page: number = 1) {
  const res = await fetch(`http://127.0.0.1:8000/api/posts?page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const AllPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [lengthArr, setLengthArr] = useState({ last_page: 1, total: null });
  useEffect(() => {
    getAllPost(page)
      .then((data) => data)
      .then((res) => {
        setPosts(res.data);

        setLengthArr({
          ...lengthArr,
          total: res.total,
          last_page: res.last_page,
        });
      });

    console.log(lengthArr);
    console.log(page);
  }, [page]);

  const handlerNextPage = (value: number) => {
    setPage((prev) => prev + 1);
  };

  const handlerPrevPage = (value: number) => {
    setPage((prev) => prev - 1);
  };

  const renderPosts = () => {
    return posts?.map((post: PostType) => {
      return <PostItem key={post.id} {...post} />;
    });
  };
  return (
    <section className={`${style.all_posts} container`}>
      <h2>All posts</h2>
      <div className={style.all_posts__container}>{renderPosts()}</div>
      <div className={style.all_posts__pagination}>
        <div
          className={style.all_posts__pagination_prev}
          onClick={page != 1 ? () => handlerPrevPage(page) : undefined}
          style={page == 1 ? { color: "#6D6E76" } : { color: "#000000 " }}
        >
          {"<"} <span>Prev</span>
        </div>
        <div
          className={style.all_posts__pagination_next}
          onClick={
            page !== lengthArr?.last_page
              ? () => handlerNextPage(page)
              : undefined
          }
          style={
            page >= lengthArr?.last_page ? { color: "#6D6E76" } : undefined
          }
        >
          <span>Next</span>
          {">"}
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
