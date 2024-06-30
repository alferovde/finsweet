import React from "react";
import style from "./authorslist.module.scss";
import { AutorsType } from "@/app/Store/interfaces";
import AuthorsCard from "../AuthorsCard/AuthorsCard";

type AuthorsListType = {
  data: AutorsType[];
};

const AuthorsList = ({ data }: AuthorsListType) => {
  console.log(data);

  function renderAuthorsList() {
    return data.slice(0, 4).map((item: AutorsType) => {
      return <AuthorsCard key={item.id} {...item} />;
    });
  }

  return (
    <section className={`${style.authors__wrapper} container`}>
      <h2>List of Authors</h2>
      <ul className={style.authors__list}>{renderAuthorsList()}</ul>
    </section>
  );
};

export default AuthorsList;
