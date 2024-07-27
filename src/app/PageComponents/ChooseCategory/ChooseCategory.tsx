import React, { CSSProperties } from "react";
import style from "./choosecategory.module.scss";
import { CategoriesType } from "@/app/Store/interfaces";
import CategoryCard from "../CategoryCard/CategoryCard";

type CooseCategoryType = {
  data: CategoriesType[];
  title: string;
  styleCss?: any;
};

const ChooseCategory = ({ data, title, styleCss }: CooseCategoryType) => {
  function renderCategoryList() {
    return data.map((item) => {
      return <CategoryCard key={item.id} fullcard {...item} />;
    });
  }

  return (
    <section
      className={`${style.choose_category__wrapper} ${styleCss} container`}
    >
      <h2>{title}</h2>
      <div className={style.choose_category__list}>{renderCategoryList()}</div>
    </section>
  );
};

export default ChooseCategory;
