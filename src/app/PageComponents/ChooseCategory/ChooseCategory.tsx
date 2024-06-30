import React from "react";
import style from "./choosecategory.module.scss";
import { CategoriesType } from "@/app/Store/interfaces";
import CategoryCard from "../CategoryCard/CategoryCard";

type CooseCategoryType = {
  data: CategoriesType[];
};

const ChooseCategory = ({ data }: CooseCategoryType) => {
  function renderCategoryList() {
    return data.map((item) => {
      return <CategoryCard key={item.id} fullcard {...item} />;
    });
  }

  return (
    <section className={`${style.choose_category__wrapper} container`}>
      <h2>Choose A Catagory</h2>
      <div className={style.choose_category__list}>{renderCategoryList()}</div>
    </section>
  );
};

export default ChooseCategory;
