import React from "react";
import async from "./../page";
import BlogFeaturePost from "../PageComponents/BlogFeaturePost/BlogFeaturePost";
import AllPosts from "../PageComponents/AllPosts/AllPosts";
import ChooseCategory from "../PageComponents/ChooseCategory/ChooseCategory";
import style from "./blogpage.module.scss";
import JoinOurTeam from "../PageComponents/JoinOurTeam/JoinOurTeam";

async function getData() {
  const res = await fetch("http://127.0.0.1:8000/api");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPage = async () => {
  const result = await getData();

  return (
    <main>
      <BlogFeaturePost
        data={result.hero_post}
        authors={result.hero_post_author}
      />
      <AllPosts />
      <ChooseCategory
        data={result.categories}
        title={"All Categories"}
        styleCss={style.categoryBlogPage}
      />
      <JoinOurTeam />
    </main>
  );
};

export default BlogPage;
